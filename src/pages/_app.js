import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";
import "../styles/index.scss"; /* main styles */
// import "../styles/mobile.css";
// import "../styles/tablet.css";
import "../styles/overrides/portable.css";

import { StateContext } from "../../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />;
      </Layout>
    </StateContext>
  );
}

export default MyApp;
