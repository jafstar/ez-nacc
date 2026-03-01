"use server";
import { notFound } from "next/navigation";
import { getPages } from "ez-content";
import ViewPage from "./view-page";

export async function generateMetadata({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return {
      title: "",
    };
  }

  const { title } = await getPages(params.slug);

  return {
    title: title,
  };
}
export default async function Page({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return;
  }
  const resp = await getPages(params.slug);
  if (resp.data && resp.data.length && resp.data[0].page_content) {
    const pageContent = resp.data[0].page_content;
    const pageGlobals = resp.data2;
    return (
      <ViewPage
        content={pageContent}
        globals={pageGlobals}
        isPreview={resp.isPreview}
      />
    );
  } else {
    notFound();
  }
}
