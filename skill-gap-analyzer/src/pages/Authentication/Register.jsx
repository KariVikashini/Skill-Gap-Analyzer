import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaUserGraduate,
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";
function Register() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const text = await response.text();
    console.log("Backend Response:", text);

const data = text ? JSON.parse(text) : {};

      if (response.ok && data.success) {
        setMessage(data.message);

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
  };
  return (
    <div className="register-page">
      <div className="container">
        <div className="row register-container shadow-lg rounded-4 overflow-hidden">
          <div className="col-lg-6 left-panel d-flex flex-column justify-content-center align-items-center">
            <FaUserGraduate className="graduate-icon" />
            <h1>Skill Gap Analyzer</h1>
            <h4>Create Your Account</h4>
            <p>
              Start your career readiness journey by creating an account and
              unlocking personalized skill insights.
            </p>
          </div>
          <div className="col-lg-6 bg-white p-5">
            <div className="text-center mb-4">
              <h2>Student Register</h2>
              <p className="text-muted">Create your account to get started</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">
                  <FaUser className="me-2" />
                  Full Name
                </label>
                <input
  type="text"
  className="form-control"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  required
/>
              </div>

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
  placeholder="Create a password"
  required
/>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  <FaLock className="me-2" />
                  Confirm Password
                </label>
                <input
  type="password"
  className="form-control"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm your password"
  required
/>
              </div>

              <button className="btn btn-primary w-100 register-btn" type="submit">
                Register
              </button>
              {message && (
  <div className="alert alert-info mt-3 text-center">
    {message}
  </div>
)}
            </form>

            <div className="text-center mt-4">
              <p>
                Already have an account?
                <Link to="/login" className="register-link">
                  Login
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

export default Register;