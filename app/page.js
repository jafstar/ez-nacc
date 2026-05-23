"use server";
import { notFound } from "next/navigation";
import { getPages } from "ez-content";
import ViewPage from "./view-page";

export async function generateMetadata() {
  const resp = await getPages();

  return {
    title: resp?.title ?? "",
  };
}
export default async function Page() {
  const resp = await getPages();

  if (resp?.content) {
    return (
      <ViewPage
        content={resp.content}
        globals={resp.globals}
        isPreview={resp.isPreview}
      />
    );
  }

  notFound();
}
