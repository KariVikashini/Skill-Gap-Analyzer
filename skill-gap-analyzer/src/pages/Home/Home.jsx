import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaUserShield,
  FaFileAlt,
  FaMicrophone,
  FaChartLine,
  FaBrain
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <section className="hero">

        <h1>Skill Gap Analyzer</h1>

        <p>
          Analyze your skills, identify career gaps, improve your resume,
          practice communication, and become placement ready.
        </p>

        <div className="hero-buttons">

          <Link to="/login">
          
            <button className="student-btn">
              <FaUserGraduate /> Student Login
            </button>
          </Link>
          

          <Link to="/admin-login">
          
            <button className="admin-btn">
              <FaUserShield /> Admin Login
            </button>
          </Link>
          

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Platform Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
          <FaFileAlt size={50} color="#2563EB" />   
           
          <h3>Resume Analysis</h3>
            <p>
              Upload your resume and identify missing skills.
            </p>
          </div>

          <div className="feature-card">
<FaBrain size={50} color="#2563EB" />            <h3>Skill Assessment</h3>
            <p>
              Evaluate your technical and aptitude knowledge.
            </p>
          </div>
          

          <div className="feature-card">
          <FaMicrophone size={50} color="#2563EB" />
            <h3>Speaking Assessment</h3>
            <p>
              Improve English speaking and communication skills.
            </p>
          </div>

          <div className="feature-card">
            <FaChartLine size={50} color="#2563EB" />
            <h3>Learning Roadmap</h3>
            <p>
              Get a personalized roadmap based on your career goal.
            </p>
          </div>

        </div>

      </section>

      {/* Workflow */}

      <section className="workflow">

        <h2>How It Works</h2>

        <div className="steps">

          <div>Create Profile</div>

          <span>➜</span>

          <div>Take Assessment</div>

          <span>➜</span>

          <div>Analyze Resume</div>

          <span>➜</span>

          <div>Skill Gap Report</div>

          <span>➜</span>

          <div>Learning Roadmap</div>

        </div>

      </section>

      {/* Footer */}

      <footer>

        <p>
          © 2026 Skill Gap Analyzer | AI-Assisted Career Readiness Platform
        </p>

      </footer>

    </div>
  );
}

export default Home;