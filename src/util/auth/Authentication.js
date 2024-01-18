import { useState } from "react";
import "./Authentication.css";
import Onboarding_1 from "./Onboarding_1";
import StartingScreen from "../../pages/StartingScreen";

const Authentication = () => {
  const [stage1, setStage1] = useState(true);
  setTimeout(() => {
    setStage1(false);
  }, 2000);
  if (stage1) {
    return <StartingScreen />;
  } else {
    return (
      <>
        <Onboarding_1 />
      </>
    );
  }
};

export default Authentication;