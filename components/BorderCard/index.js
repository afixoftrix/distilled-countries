import cn from 'classnames';

import borderCardStyles from "./styles.module.css";
import typo from '../../styles/typography.module.css'

//TODO: add prop-types
const BorderCard = ({ name, flag, population }) => (
  <div className={borderCardStyles.container}>
    <div>
      <img
        className={borderCardStyles.image}
        src={flag}
        alt={`${name}'s flag`}
      />
    </div>
    <div className={typo.headingMd}>{name}</div>
    <div className={cn(typo.italisize, typo.lightTxtSm, borderCardStyles.popContainer)}>
      <span class="material-icons">person_outline{" "}</span>
      <span className={borderCardStyles.population}>{population}</span>
    </div>
  </div>
);

export default BorderCard
