import Image from "next/image";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./styles.module.css";
import typo from "../../styles/typography.module.css";
import colors from "../../styles/colors.module.css";

const CountryCard = ({ countryName, capital, population, flag }) => (
  <div className={styles.container}>
    <div className={styles.topCard}>
      <div className={styles.imageContainer}>
        <Image
          src={flag}
          alt={`${countryName}'s flag`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* <img className={styles.image} src={flag} alt={`${name}'s flag`} /> */}
      <div className={styles.nameAndCapital}>
        <div className={cn(typo.headingXl, colors.countryName)}>
          {countryName}
        </div>
        <div>
          <span className={cn(typo.headingMd, colors.txtColor)}>Capital: </span>
          <span className={cn(typo.lightTxt, colors.txtColor)}>{capital}</span>
        </div>
      </div>
    </div>
    <div className={cn(typo.headingMd, colors.txtColor)}>
      Popoulation:{" "}
      <span className={cn(typo.lightTxt, colors.txtColor)}>{population}</span>
    </div>
  </div>
);

CountryCard.propTypes = {
  countryName: PropTypes.string,
  capital: PropTypes.string,
  population: PropTypes.string,
  flag: PropTypes.string.isRequired,
};

export default CountryCard;
