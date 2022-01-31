import cn from "classnames";
import PropTypes from "prop-types";

import infoStyles from "./styles.module.css";
import typo from "../../styles/typography.module.css";
import colors from "../../styles/colors.module.css";

const keyStyle = cn(typo.headingMd, colors.txtColor);
const valStyle = cn(typo.lightTxt, colors.txtColor);

const InfoCard = ({ country, capital, pop, currency, langs }) => (
  <div className={infoStyles.container}>
    <div className={cn(typo.headingXl, colors.countryName)}>{country}</div>
    <div className={keyStyle}>
      Capital: <span className={valStyle}>{capital}</span>
    </div>
    <div className={keyStyle}>
      Polulation: <span className={valStyle}>{pop}</span>
    </div>
    <div className={keyStyle}>
      Currency: <span className={valStyle}>{currency}</span>
    </div>
    <div className={keyStyle}>
      Language: <span className={valStyle}>{langs}</span>
    </div>
  </div>
);

InfoCard.propTypes = {
  country: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  pop: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  langs: PropTypes.string.isRequired,
};

export default InfoCard;
