import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar";

const Layout = () => {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
