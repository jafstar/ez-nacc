import Head from "next/head";
import useSWR, { SWRConfig } from "swr";
import loadable from "@loadable/component";
const fetcher = (url) =>
  fetch(url, {
    headers: {
      AuthEZ: `123456789`,
      SupaID: "54321",
    },
    referrer: "http://nacc.ez",
  }).then((res) => res.json());

// const API = `http://localhost:8080/pages/index`;
const API = `https://ez-content-api.ue.r.appspot.com/pages/index`;

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}

function Page() {
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  // console.log("Is data ready?", data);

  if (error) return "An error has occurred.";
  if (data && data.content && data.content.length === 0)
    return "No content available";
  if (!data) return "Loading...";

  const pageTitle = data[0]?.page_title || "Welcome";
  const pageContent = data[0].page_content;
  const compList = pageContent.map((itm) => {
    return loadable(() => import(`../components/${itm.comp_type}`));
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {compList.map((Itm, idx) => {
        return (
          <div key={`itm-${idx}`}>
            <Itm content={pageContent[idx].comp_content} />
          </div>
        );
      })}
    </>
  );
}

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Page />
    </SWRConfig>
  );
}
