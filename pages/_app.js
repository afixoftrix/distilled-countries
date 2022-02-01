import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import cn from "classnames";

import layout from "../styles/layout.module.css";
import typo from "../styles/typography.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    /**
     * Here, Im creating a history list for the app to tell whether to show
     * the back button or not. There might be a better way to do this. Please let me know if there is.
     */
    const handleRouteChange = (url) => {
      setHistory((prevState) => [...prevState, url]);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="app for countries -- a distilled assessment project -- Unwana Essien"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={layout.container}>
        <Link href="/">
          <h1 className={cn(typo.heading2Xl, typo.alignCenter, typo.clickable)}>
            Countries App
          </h1>
        </Link>
        <Component history={history} {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
