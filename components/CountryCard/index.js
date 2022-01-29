import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./styles.module.css";
import typo from "../../styles/typography.module.css"
import colors from "../../styles/colors.module.css";

const CountryCards = ({ name, capital, population, flag }) => (
  <div className={styles.container}>
    <div className={styles.topCard}>
      <img className={styles.image} src={flag} alt={`${name}'s flag`} />
      <div className={styles.nameAndCapital}>
        <div className={cn(typo.headingXl, colors.countryName)}>{name}</div>
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

CountryCards.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountryCards;
