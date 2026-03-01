"use client";

import { composeContent, ViewContent } from "ez-content";
// import ViewContent from "@/components/ViewContent";
import Header from "@/components/common/header/HeaderOne";
import Footer from "@/components/common/footer/FooterOne";

export default function SlugPage({ content, globals, isPreview }) {
  const { compListAll, contentListAll } = composeContent(
    content,
    globals,
    isPreview
  );

  return (
    <div>
      {!isPreview && <Header globals={globals} />}
      <main>
        <ViewContent
          components={compListAll}
          content={contentListAll}
          globals={globals}
        />
      </main>
      {!isPreview && <Footer globals={globals} />}
    </div>
  );
}

/*
import dynamic from "next/dynamic";

export default function SlugPage({ content, globals, isPreview }) {
  // console.log("content: ", content);

  // console.log("isPreview: ", isPreview);

  let _CONTENT;
  if (isPreview && isPreview.comp) {
    let tmpContent = content.filter((itm) => itm.comp_type === isPreview.comp);
    _CONTENT = tmpContent;
  } else {
    _CONTENT = content;
  }

  const compList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      const tmpPath = itm.comp_path ? `${itm.comp_path}` : `/${itm.comp_type}`;
      return dynamic(() =>
        import(`../components${tmpPath}`, { ssr: !isPreview })
      );
      // return dynamic(() => import(`../components/${itm.comp_type}`));
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });

      // console.log("globalContentList: ", globalContentList);

      // comp_content: globalContentList[0]?.global_content,

      return globalContentList[0]?.global_content.map((itm2) => {
        console.log(itm2);
        const tmpPath = itm2.comp_path
          ? `${itm2.comp_path}`
          : `/${itm2.comp_type}`;

        return dynamic(() =>
          import(`../components${tmpPath}`, { ssr: !isPreview })
        );
      });
    }
  });

  const contentList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      return itm;
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });
      return globalContentList[0]?.global_content;
      // return itm.comp_content.map((itm2) => {
      //   return itm2;
      // });
    }
  });

  // console.log("compList: ", compList);

  const compListAll = compList.flat();
  const contentListAll = contentList.flat();

  // console.log("compListAll: ", compListAll);
  // console.log("contentListAll: ", contentListAll);
  return (
    <div>
      <main>
        {compListAll.map((Itm, idx) => {
          if (contentListAll[idx] && contentListAll[idx].comp_content) {
            return (
              <div
                key={`itm-${idx}`}
                id={`${contentListAll[idx].comp_type}-${idx}`}
              >
                <Itm
                  content={contentListAll[idx].comp_content}
                  globals={globals}
                />
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </main>
    </div>
  );
}

*/
