"use client";

import dynamic from "next/dynamic";
import { ViewContent, useEZDraftRender, composeContent, getComponentPath } from "ez-content/client";

// import ViewContent from "@/components/ViewContent";
import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";
import { rewriteImageUrlsDeep } from "@/utils/imageSource";

// dynamic() must live in the app so webpack resolves ../components relative to this file.
const resolveComponent = (itm) =>
  dynamic(() => import(`../components${getComponentPath(itm)}`));

export default function SlugPage({ content, globals, isPreview }) {
  const rewrittenContent = rewriteImageUrlsDeep(content);
  const rewrittenGlobals = rewriteImageUrlsDeep(globals);

  const { compListAll, contentListAll } = composeContent(
    rewrittenContent,
    rewrittenGlobals,
    isPreview,
    resolveComponent,
  );

  return (
    <div>
      {!isPreview && <Header globals={rewrittenGlobals} />}
      <main>
        <ViewContent
          components={compListAll}
          content={contentListAll}
          globals={rewrittenGlobals}
          isPreview={isPreview}
        />
      </main>
      {!isPreview && <Footer globals={rewrittenGlobals} />}
    </div>
  );
}
