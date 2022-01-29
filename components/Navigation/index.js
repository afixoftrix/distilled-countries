import Button from "../Button"
import { useRouter } from "next/router";

import nav from "./nav.module.css";

const Navigation = ({ link, hasHistory }) => {
  const router = useRouter();
  console.log(hasHistory)
  return <div className={nav.btnContainer}>
    {hasHistory && <Button onClick={() => router.back() }>{"< "} Back</Button>}
  </div>
}

export default Navigation