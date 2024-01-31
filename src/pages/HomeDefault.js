import React from "react";
import { lazy, LazyBoundary } from "react-imported-component";

import HeaderTwo from "../common/header/HeaderTwo";
import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
  const [compList, setCompList] = React.useState(null);
  const [pageContent, setPageContent] = React.useState(null);

  React.useEffect(() => {
    const API_BASE = `https://gnbxwvzlnzromuawcswx.supabase.co/functions/v1`;
    const URL = `${API_BASE}/pages/index`;

    const res = fetch(URL, {
      method: "POST",
      mode: "cors",
      // headers: {
      //   AuthEZ: `123456789`,
      // },
      referrer: "http://nacc.ez",
    }).then((resp) => {
      resp.json().then((data) => {
        // console.log("data: ", data);
        const tmpTitle = data[0]?.page_title || "Welcome";
        const tmpContent = data[0].page_content;
        const tmpList = tmpContent.map((itm) => {
          // console.log("itm: ", itm);

          const tmpPath = itm.comp_path
            ? `${itm.comp_path}`
            : `/${itm.comp_type}`;
          return lazy(() => import(`../components${tmpPath}`));
        });
        setPageContent(tmpContent);

        setCompList([...tmpList]);
      });
    });
  }, []);

  return (
    <>
      <HeaderTwo />

      {pageContent &&
        compList &&
        compList.map((Itm, idx) => {
          // console.log("Itm: ", Itm);
          return (
            <div key={`itm-${idx}`}>
              <Itm content={pageContent[idx].comp_content} />
            </div>
          );
        })}
      <FooterOne />
      {/* <HeroTwo />
      <TwoSection />

      <FeatureTwo />

      <AboutOne />
      <CounterOne />

      <ProjectOne />

      <SkillOne />
      <TeamOne />
      <VideoOne />
      <TestimonialOne />
      <BlogSectionThree /> */}
    </>
  );
};

export default HomeDefault;

/**
 * 
 * 
 *              <BrandTwo /> 
    <CausesFour /> 
       <CounterTwo /> 
 */
