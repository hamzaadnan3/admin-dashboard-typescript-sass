import AdminSidebar from "../components/AdminSidebar";
import {BsSearch} from "react-icons/bs"
import { FaRegBell } from "react-icons/fa";
import userpic from "../assets/userpic.png"

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
<BsSearch/>
<input type="text" placeholder="Search for data" />
<FaRegBell/>
<img src={userpic} alt="" />

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
