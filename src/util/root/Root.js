import { Outlet, redirect } from "react-router-dom";
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

export function checkAuthLoader(){
  const token = false;
  if(!token){
    return redirect('/auth');
  }
  return null;
}
