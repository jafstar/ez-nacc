"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getContent } from "ez-content";
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

  const { tag, category, q, page: pageParam } = searchParams ?? {};
  const page = Math.max(1, parseInt(pageParam ?? "1", 10));
  const limit = 12;

  const queryOpts = { page, limit };
  if (tag) queryOpts.tags = tag;
  if (category) queryOpts.category = category;
  if (q) queryOpts.q = q;

  const resp = await getContent(type, { query: queryOpts });

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
          activeTag={tag ?? null}
          activeCategory={category ?? null}
          q={q ?? null}
        />
      </main>
      {!isPreview && <Footer globals={globals} />}
    </div>
  );
}
