import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

function DashBoard() {
  return (
    <div>
      <Heading title={"Dashboard"} />

      <div className="min-h-[60vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
