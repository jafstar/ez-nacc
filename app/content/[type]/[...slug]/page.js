"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getContent } from "ez-content";
import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";
import ContentTypeDetail from "@/components/ContentTypeDetail";

const Breadcrumb = dynamic(
  () => import("@/components/common/breadcrumb/Breadcrumb"),
  { ssr: false }
);

export async function generateMetadata({ params }) {
  if (String(params.slug).includes("%")) return { title: "" };
  const resp = await getContent(`${params.type}/${params.slug.join("/")}`);
  const item = resp?.data?.[0];
  return {
    title:
      item?.content_title ??
      item?.content_fields?.title ??
      item?.content_fields?.name ??
      "",
  };
}

export default async function Page({ params }) {
  if (String(params.slug).includes("%")) return;

  const { type, slug } = params;
  const resp = await getContent(`${type}/${slug.join("/")}`);

  if (!resp) return <>No Content</>;

  const { data, globals, isPreview } = resp;

  if (!data || !data[0] || data[0]?.no_content) return notFound();

  const item = data[0];
  const breadcrumb = {
    heading:
      item.content_title ??
      item.content_fields?.title ??
      item.content_fields?.name ??
      "",
    bgImg: item.content_fields?.image ?? null,
    body: item.content_fields?.intro?.split(".")?.[0] ?? " ",
  };

  return (
    <div>
      {!isPreview && <Header globals={globals} />}
      <main>
        <Breadcrumb content={breadcrumb} />
        <ContentTypeDetail item={item} type={type} />
      </main>
      {!isPreview && <Footer globals={globals} />}
    </div>
  );
}
