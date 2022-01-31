import PropTypes from "prop-types";
import cn from "classnames";

import borderCardStyles from "./styles.module.css";
import typo from "../../styles/typography.module.css";

const BorderCard = ({ countryName, flag, population }) => (
  <div className={borderCardStyles.container}>
    <div>
      <img
        className={borderCardStyles.image}
        src={flag}
        alt={`${countryName}'s flag`}
      />
    </div>
    <div className={typo.headingMd}>{countryName}</div>
    <div
      className={cn(
        typo.italisize,
        typo.lightTxtSm,
        borderCardStyles.popContainer
      )}
    >
      <span class={cn(`material-icons`, typo.matIcon)}>person_outline </span>
      <span className={borderCardStyles.population}>{population}</span>
    </div>
  </div>
);

BorderCard.propTypes = {
  countryName: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};
export default BorderCard;
