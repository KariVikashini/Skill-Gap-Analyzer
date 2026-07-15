import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {

        // Allow only students
        if (data.role !== "STUDENT") {
          setMessage("Please use the Admin Login page.");
          return;
        }

        // Save logged-in user
        // Save logged-in user
localStorage.setItem(
  "user",
  JSON.stringify({
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
  })
);

        setMessage("Login Successful!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="login-page">

      <div className="container">

        <div className="row login-container shadow-lg rounded-4 overflow-hidden">

          {/* Left Side */}

          <div className="col-lg-6 left-panel d-flex flex-column justify-content-center align-items-center">

            <FaUserGraduate className="graduate-icon" />

            <h1>Skill Gap Analyzer</h1>

            <h4>Welcome Back!</h4>

            <p>
              Login to continue your career readiness journey.
              Analyze your skills, improve your resume,
              and achieve your dream career.
            </p>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 bg-white p-5">

            <div className="text-center mb-4">

              <h2>Student Login</h2>

              <p className="text-muted">
                Enter your credentials to continue
              </p>

            </div>

            <form onSubmit={handleLogin}>

              {/* Email */}

              <div className="mb-3">

                <label className="form-label">

                  <FaEnvelope className="me-2" />

                  Email

                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

              {/* Password */}

              <div className="mb-3">

                <label className="form-label">

                  <FaLock className="me-2" />

                  Password

                </label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />

              </div>

              <div className="d-flex justify-content-between mb-4">

                <div>

                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                  />

                  Remember Me

                </div>

                <a href="#" className="forgot-link">
                  Forgot Password?
                </a>

              </div>

              <button
                className="btn btn-primary w-100 login-btn"
                type="submit"
              >
                Login
              </button>

              {message && (
                <div className="alert alert-info mt-3 text-center">
                  {message}
                </div>
              )}

            </form>

            <div className="text-center mt-4">

              <p>

                Don't have an account?

                <Link to="/register" className="register-link">

                  Register

                </Link>

              </p>

            </div>

            <div className="text-center mt-3">

              <Link to="/" className="back-home">

                <FaArrowLeft />

                Back to Home

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;