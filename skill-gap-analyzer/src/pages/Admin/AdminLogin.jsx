import "../Authentication/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Temporary Admin Credentials
    const adminEmail = "admin@skillgap.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      setError("");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row login-container shadow-lg rounded-4 overflow-hidden">

          {/* Left Panel */}
          <div className="col-lg-6 left-panel d-flex flex-column justify-content-center align-items-center">
            <FaUserShield className="graduate-icon" />

            <h1>Skill Gap Analyzer</h1>

            <h4>Admin Access</h4>

            <p>
              Sign in to manage skills, careers, questions, and student insights.
            </p>
          </div>

          {/* Right Panel */}
          <div className="col-lg-6 bg-white p-5">

            <div className="text-center mb-4">
              <h2>Admin Login</h2>

              <p className="text-muted">
                Enter your admin credentials to continue
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  <FaEnvelope className="me-2" />
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="form-label">
                  <FaLock className="me-2" />
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="alert alert-danger py-2 text-center">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
              >
                Login
              </button>

            </form>

            {/* Back Button */}
            <div className="text-center mt-3">
              <Link to="/" className="back-home">
                <FaArrowLeft className="me-2" />
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;