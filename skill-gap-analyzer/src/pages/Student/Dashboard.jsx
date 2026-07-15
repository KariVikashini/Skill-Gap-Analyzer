import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

import {
  FaChartPie,
  FaFileAlt,
  FaClipboardCheck,
  FaMicrophone,
} from "react-icons/fa";

function Dashboard() {
  const [user] = useState(() => {
  const loggedUser = localStorage.getItem("user");
  return loggedUser ? JSON.parse(loggedUser) : { name: "Student" };
});

const [activity, setActivity] = useState([]);

useEffect(() => {

    const loadProfile = async () => {

        try {

            const response = await getProfile(user.id);

            const profile = response.data;

            const resumeUploaded =
                profile.resume !== null &&
                profile.resume !== "";

            setActivity([
                {
                    text: `Welcome ${user.name}! Logged in successfully.`,
                    status: "completed",
                },
                {
                    text: resumeUploaded
                        ? "Resume uploaded successfully."
                        : "Resume upload pending.",
                    status: resumeUploaded
                        ? "completed"
                        : "pending",
                },
                {
                    text: "Assessment not attempted.",
                    status: "pending",
                },
                {
                    text: "Speaking Assessment pending.",
                    status: "pending",
                },
            ]);

        } catch (error) {

            console.error(error);

        }

    };

    loadProfile();

}, [user.id, user.name]);

  return (
    <>
      <Navbar title="Student Dashboard" />

      <div className="d-flex">
        <Sidebar role="student" />

        <div
          className="container-fluid p-4"
          style={{ background: "#F4F7FC", minHeight: "100vh" }}
        >
          {/* Welcome Section */}

          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h2 className="fw-bold">
                Welcome, {user.name || "Student"} 👋
              </h2>

              <p className="text-muted mb-0">
                Here's your learning progress for today.
              </p>
            </div>

            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "#2563EB",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : "S"}
            </div>
          </div>

          {/* Cards */}

          <div className="row g-4">
            <div className="col-md-3">
              <DashboardCard
                title="Career Match"
                color="#2563EB"
                icon={<FaChartPie />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Resume Score"
                color="#16A34A"
                icon={<FaFileAlt />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Assessments"
                color="#F59E0B"
                icon={<FaClipboardCheck />}
              />
            </div>

            <div className="col-md-3">
              <DashboardCard
                title="Speaking Score"
                color="#DC2626"
                icon={<FaMicrophone />}
              />
            </div>
          </div>

          {/* Recent Activity */}

          <div className="card mt-5 shadow-sm border-0">
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold mb-0">Recent Activity</h4>

                <small className="text-muted">
                  {new Date().toLocaleDateString()}
                </small>
              </div>

              {activity.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center border-bottom py-3"
                >
                  <span>{item.text}</span>

                  <span
                    className={`badge ${
                      item.status === "completed"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}

              {activity.length === 0 && (
                <p className="text-muted">
                  No recent activities found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;