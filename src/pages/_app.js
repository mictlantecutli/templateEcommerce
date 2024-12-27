import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";
import "../styles/index.scss"; /* main styles */
// import "../styles/mobile.css";
// import "../styles/tablet.css";
import "../styles/overrides/portable.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { StateContext } from "../../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        title="Next SEO Example"
        description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
        twitter={{
          handle: "@handle",
          site: "@site",
          card: "summary_large_image",
        }}
      />
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />;
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
