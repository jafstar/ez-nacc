import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "../styles/grid-list.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
// import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  // Hooks
  const router = useRouter();

  // State - local
  const [isLoading, setIsLoading] = React.useState(false);

  // Vars
  const getLayout = Component.getLayout || ((page) => page);
  const pathname =
    router.pathname === "/"
      ? "__home"
      : String(router.asPath).replaceAll("/", "__");
  // Func
  const handleRouteChange = () => {
    setIsLoading(true);
  };

  // Func
  const handleRouteComplete = () => {
    setIsLoading(false);
  };

  // Effects
  React.useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="X7MwmJJundiwfxFQHv0oBFD49JnEvSVpssb4JQerAMI"
        />
      </Head>
      <div className={`${pathname}`}>
        <Navbar />
        {isLoading ? (
          <div className="loading-screen">
            <i class="gg-spinner"></i> <br />
            Loading
          </div>
        ) : null}

        {getLayout(<Component {...pageProps} />)}

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
