import PropTypes from "prop-types";

import buttonStyles from "./styles.module.css";

const Button = ({ onClick, children }) => {
  return (
    <div className={buttonStyles.container} onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
