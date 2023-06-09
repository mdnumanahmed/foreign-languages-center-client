import { Outlet } from "react-router-dom";
import FlcNavbar from "../pages/Shared/FlcNavbar/FlcNavbar";
import FlcFooter from "../pages/Shared/FlcNavbar/FlcFooter";

const MainLayout = () => {
  return (
    <div>
        <FlcNavbar />
      <Outlet />
      <FlcFooter />
    </div>
  );
};

export default MainLayout;
