import React, { useEffect, useState } from "react";

import CountryCards from "../components/CountryCard";
import countriesApi from "../countries-api";

import layout from "../styles/layout.module.css";
import typo from "../styles/typography.module.css";
import Link from "next/link";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesApi
      .getAll()
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <main className={layout.main}>
        {loading && <div>loading...</div>}
        {!loading && (
          <>
            {countries.map(({ name, capital=[], flags, population }, i) => {
              const commonName = name?.common || "invalid country name";
              const flagSVG = flags?.svg;
              const countryCap = capital[0];
              
              return (
                <Link href={`/${commonName}`} key={`${commonName}-${i}`}>
                  <a className={layout.countryLink}>
                    <CountryCards
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
