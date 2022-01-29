import buttonStyles from './styles.module.css'

const Button = ({ onClick, children }) => {
  return <div className={buttonStyles.container} onClick={onClick}>{children}</div>;
};

export default Button
