import React, { useEffect, useState } from "react";

import CountryCard from "../components/CountryCard";
import countriesApi from "../countries-api";

import layout from "../styles/layout.module.css";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    countriesApi
      .getAll()
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPageError(true);
      });
  }, []);

  return (
    <main className={layout.indexContainer}>
      {pageError && <div>There was an issue loading this page</div>}
      {loading && !pageError && <div>loading...</div>}
      {!loading && !pageError && (
        <>
          {countries.map(({ name, capital = [], flags, population }, i) => {
            const commonName = name?.common || "invalid country name";
            const flagSVG = flags?.svg;
            const countryCap = capital[0];

            return (
              <Link href={`/${commonName}`} key={`${commonName}-${i}`}>
                <a role="link" className={layout.countryLink}>
                  <CountryCard
                    countryName={commonName}
                    capital={countryCap}
                    flag={flagSVG}
                    population={Number(population).toLocaleString()}
                  />
                </a>
              </Link>
            );
          })}
        </>
      )}
    </main>
  );
}
