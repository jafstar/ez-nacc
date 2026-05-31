"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getContent, buildContentQuery } from "ez-content";
import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";
import ContentTypeList from "@/components/ContentTypeList";

const Breadcrumb = dynamic(
  () => import("@/components/common/breadcrumb/Breadcrumb"),
  { ssr: false }
);

export async function generateMetadata({ params }) {
  const type = params.type;
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return { title: label };
}

export default async function Page({ params, searchParams }) {
  const type = params.type;

  if (!type || type.includes("%")) return;

  const { query, page, limit } = buildContentQuery(searchParams, { limit: 12 });

  const resp = await getContent(type, { query });

  if (!resp) return <>No Content</>;

  const { data, globals, isPreview, total } = resp;

  if (!data || (data.length === 1 && data[0]?.no_content)) {
    return notFound();
  }

  const label = type.charAt(0).toUpperCase() + type.slice(1);
  const breadcrumb = { heading: label, bgImg: null, body: " " };

  return (
    <div>
      {!isPreview && <Header globals={globals} />}
      <main>
        <Breadcrumb content={breadcrumb} />
        <ContentTypeList
          data={data}
          type={type}
          total={total > 0 ? total : data.length}
          page={page}
          limit={limit}
          activeTag={query.tags ?? null}
          activeCategory={query.category ?? null}
          q={query.q ?? null}
        />
      </main>
      {!isPreview && <Footer globals={globals} />}
    </div>
  );
}
