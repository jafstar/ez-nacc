import React from "react";
import { lazy, LazyBoundary } from "react-imported-component";

const HomeDefault = () => {
  const [pageData, setPageData] = React.useState(null);

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
        const tmpTitle = data[0]?.page_title || "NACC";
        const tmpContent = data[0].page_content;
        const tmpList = tmpContent.map((itm) => {
          const tmpPath = itm.comp_path
            ? `${itm.comp_path}`
            : `/${itm.comp_type}`;

          return lazy(() => import(`../components${tmpPath}`));
        });

        setPageData({
          title: tmpTitle,
          content: tmpContent,
          components: [...tmpList],
        });
      });
    });
  }, []);

  return (
    <>
      {pageData &&
        pageData.components &&
        pageData.components.map((Itm, idx) => {
          return (
            <div key={`itm-${idx}`}>
              <Itm content={pageData.content[idx].comp_content} />
            </div>
          );
        })}
    </>
  );
};

export default HomeDefault;
