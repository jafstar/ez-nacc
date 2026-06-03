"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getContent, getContentTitle, getContentImage, getContentIntro } from "ez-content/server";
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
  return { title: getContentTitle(item) };
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
    heading: getContentTitle(item),
    bgImg:   getContentImage(item),
    body:    getContentIntro(item).split(".")?.[0] ?? " ",
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
