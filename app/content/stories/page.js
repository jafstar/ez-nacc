"use server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import { getContent } from "ez-content";
import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";
import StoriesList from "@/components/StoriesList";

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

  const { title } = "Stories";

  return {
    title: title,
  };
}
export default async function Page({ params }) {
  if (String(params.slug).split("").includes("%")) {
    return;
  }

  const resp = await getContent("stories");

  if (!resp) {
    return <>No Content</>;
  }

  const { data, globals, isPreview } = resp;

  if (data) {
    const content = {
      heading: "Stories",
      bgImg: null,
      body: " ",
    };

    return (
      <div>
        {!isPreview && <Header globals={globals} />}
        <main>
          <div>
            <Breadcrumb content={content} />
            <StoriesList data={data} />
          </div>
        </main>
        {!isPreview && <Footer globals={globals} />}
      </div>
    );
  } else {
    return notFound();
  }
}
