import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";

function Home() {

  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}

export default Home;
