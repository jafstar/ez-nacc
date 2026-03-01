"use server";
import { notFound } from "next/navigation";
import { getPages } from "ez-content";
import ViewPage from "../view-page";

export async function generateMetadata({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return {
      title: "",
    };
  }

  const resp = await getPages(params.slug);

  // console.log("resp: ", resp)

  return {
    title: resp?.title ?? "Welcome",
  };
}
export default async function Page({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return;
  }

  const resp = await getPages(params.slug);
  // console.log("resp2: ", resp)

  if (resp && resp.data && resp.data.length && resp.data[0].page_content) {
    const { content, globals, isPreview } = resp;
    if (content) {
      return (
        <>
          <ViewPage content={content} globals={globals} isPreview={isPreview} />
        </>
      );
    }
  } else {
    return notFound();
  }
}
