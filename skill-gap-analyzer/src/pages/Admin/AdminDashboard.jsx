import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";
import { getDashboard } from "../../services/dashboardService";

import {
  FaUsers,
  FaClipboardList,
  FaChartBar,
  FaUserGraduate,
} from "react-icons/fa";

function AdminDashboard() {

  const [stats, setStats] = useState({
    students: 0,
    questions: 0,
    careers: 0,
    reports: "--",
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboard();

        setStats({
          students: response.data.students,
          questions: response.data.questions,
          careers: response.data.careers,
          reports: "--",
        });
      } catch (error) {
        console.error("Error loading dashboard:", error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <>
      <Navbar title="Admin Dashboard" />

      <div className="d-flex">

        <Sidebar role="admin" />

        <div
          className="container-fluid p-4"
          style={{ background: "#F4F7FC", minHeight: "100vh" }}
        >

          <h2 className="mb-4">
            Welcome Admin 👋
          </h2>

          <div className="row g-4">

            <div className="col-md-3">
              <DashboardCard
                title="Students"
                value={stats.students}
                color="#2563EB"
                icon={<FaUsers />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Questions"
                value={stats.questions}
                color="#16A34A"
                icon={<FaClipboardList />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Reports"
                value={stats.reports}
                color="#DC2626"
                icon={<FaChartBar />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Career Roles"
                value={stats.careers}
                color="#F59E0B"
                icon={<FaUserGraduate />}
              />
            </div>

          </div>

          <div className="card mt-5 shadow-sm">
            <div className="card-body">

              <h4>Recent Activities</h4>

              <ul className="mb-0">
                <li>📌 {stats.students} students are currently registered.</li>
                <li>📝 {stats.questions} assessment questions are available.</li>
                <li>💼 {stats.careers} career roles have been configured.</li>
                <li>🔄 Dashboard synchronized with the latest database records.</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;