import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import _ from "lodash";

import countriesApi from "../countries-api";
import Loader from "../components/Loader";
import BorderCard from "../components/BorderCard";

import layout from "../styles/layout.module.css";
import typo from "../styles/typography.module.css";
import InfoCard from "../components/InfoCard";
import Navigation from "../components/Navigation";

//default country data
const defaultCData = {
  capital: "",
  pop: "",
  cur: "",
  langs: "",
  flag: "",
};

const CountryInfo = ({ history = [] }) => {
  const [countryData, setCountryData] = useState(defaultCData);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);
  const router = useRouter();
  // const countryInUrl = new URL(window.location.href);
  const country = router.query?.country;
  console.log(country, history);

  useEffect(async () => {
    try {
      if (country !== undefined) {
        let res = await countriesApi.getByName(country);

        if (_.has(res?.data[0], "borders")) {
          let borderRes = res?.data[0]?.borders.map(async (cca) => {
            let border = await countriesApi.getByCCA(cca);

            return border.data[0];
          });
          Promise.all([...borderRes]).then((borders) =>
            setBorderCountries([...borders])
          );
        } else {
          setBorderCountries("This country is an island!");
        }

        setCountryData((prevState) => {
          let data = res?.data[0];
          let cur = Object.keys(data?.currencies).join(", ");
          let langs = Object.values(data?.languages).join(", ");
          console.log(cur, langs, data);
          return {
            ...prevState,
            capital: data?.capital[0],
            pop: data?.population,
            cur,
            langs,
            flag: data?.flags?.svg,
          };
        });
        if (res) {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setPageError(true);
    }
  }, [country]);

  if (pageError) {
    return (
      <div className={layout.indexContainer}>
        <div>Sorry try later, there's a problem with this page</div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={layout.indexContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={layout.countryContainer}>
      <Navigation hasHistory={history.length > 0} />
      <div className={layout.flagImage}>
        <Image
          src={countryData.flag}
          alt={`${country}--flag-image`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <InfoCard
        country={country}
        capital={countryData.capital}
        pop={Number(countryData.pop).toLocaleString()}
        currency={countryData.cur}
        langs={countryData.langs}
      />
      <div>
        <div className={cn(typo.headingLg, layout.spacingBottom)}>
          Bordering Countries
        </div>
        <div className={layout.countryGrid}>
          {Array.isArray(borderCountries) ? (
            borderCountries.map(({ name, flags, population }, i) => {
              let commonName = name?.common;
              let flagSVG = flags?.svg;

              return (
                <Link href={`/${commonName}`} key={`${commonName}-${i}`}>
                  <a className={layout.countryLink}>
                    <BorderCard
                      name={commonName}
                      flag={flagSVG}
                      population={Number(population).toLocaleString()}
                    />
                  </a>
                </Link>
              );
            })
          ) : (
            <div>{borderCountries}</div>
          )}
          {}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
