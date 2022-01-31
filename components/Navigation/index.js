import PropTypes from "prop-types";

import Button from "../Button";
import { useRouter } from "next/router";

import nav from "./nav.module.css";

const Navigation = ({ hasHistory }) => {
  const router = useRouter();
  console.log(hasHistory);
  return (
    <div className={nav.btnContainer}>
      {hasHistory && <Button onClick={() => router.back()}>{"< "} Back</Button>}
    </div>
  );
};

Navigation.propTypes = {
  hasHistory: PropTypes.bool.isRequired,
};

export default Navigation;
