import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
