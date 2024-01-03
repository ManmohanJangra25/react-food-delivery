import { Outlet } from "react-router-dom";
import NavigationWrapper from "../../components/navigation/NavigationWrapper";

const RootElement = () => {
  return (
    <>
      <NavigationWrapper />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootElement;
