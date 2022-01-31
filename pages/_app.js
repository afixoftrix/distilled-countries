import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import cn from "classnames";

import layout from "../styles/layout.module.css";
import typo from "../styles/typography.module.css";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      setHistory(prevState => ([...prevState, url]));
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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </Head>
      <div className={cn(layout.container)}>
        <Link href="/">
          <h1 className={cn(typo.heading2Xl, typo.alignCenter)}>Countries App</h1>
        </Link>
        <Component history={history} {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
