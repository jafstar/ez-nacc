"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getContent } from "ez-content";

import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";
import TeamDetails from "@/components/TeamDetails";
const Breadcrumb = dynamic(
  () => import("@/components/common/breadcrumb/Breadcrumb"),
  {
    ssr: false,
  }
);
export async function generateMetadata({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return {
      title: "",
    };
  }
  const { title } = "Team"; //await getContent(params.slug);

  return {
    title: title,
  };
}
export default async function Page({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return;
  }

  const resp = await getContent(`team/${params.slug}`);

  if (!resp) {
    return <>No Content</>;
  }

  const { data, globals, isPreview } = resp;

  // console.log("data: ", data);
  // console.log("content: ", content);

  if (data) {
    const content = {
      bgImg: data[0]?.content_fields.image,
      heading: data[0]?.content_title,
      body: " ",
    };

    return (
      <div>
        {!isPreview && <Header globals={globals} />}
        <main>
          <div>
            <Breadcrumb content={content} />
            <TeamDetails content={data} globals={globals} />
          </div>
        </main>
        {!isPreview && <Footer globals={globals} />}
      </div>
    );
  } else {
    return notFound();
  }
}
