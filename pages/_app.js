/// <reference types="@emotion/react/types/css-prop" />;
import { Global } from "@emotion/react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Global
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          background: "#121212",
          color: "#E2E2E2",
          fontFamily: "'PT Sans', sans-serif",
        },
      }}
    />
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
