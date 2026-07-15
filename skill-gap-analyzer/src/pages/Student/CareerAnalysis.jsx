//import React from "react";
import "./CareerAnalysis.css";

const careerMatches = [
  { role: "Software Developer", score: 92 },
  { role: "Java Backend Developer", score: 88 },
  { role: "Full Stack Developer", score: 85 },
];

const skillGaps = [
  { skill: "Java", score: 90 },
  { skill: "React", score: 70 },
  { skill: "Communication", score: 60 },
  { skill: "SQL", score: 80 },
  { skill: "Problem Solving", score: 85 },
];

const learningPath = [
  "Learn Spring Boot",
  "Improve React Skills",
  "Complete SQL Assessment",
  "Practice Speaking Daily",
];

function CareerAnalysis() {
  return (
    <div className="career-container">

      {/* Header */}
      <div className="career-header">
        <div>
          <h2>Career Analysis</h2>
          <p>Understand your strengths and identify areas for improvement.</p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-download me-2"></i>
          Download Report
        </button>
      </div>

      {/* Score Cards */}
      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="analysis-card">
            <div>
              <h6>Resume Score</h6>
              <h3>84%</h3>
            </div>

            <div className="icon blue">
              <i className="bi bi-file-earmark-text"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="analysis-card">
            <div>
              <h6>Speaking Score</h6>
              <h3>72%</h3>
            </div>

            <div className="icon red">
              <i className="bi bi-mic-fill"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="analysis-card">
            <div>
              <h6>Assessment</h6>
              <h3>91%</h3>
            </div>

            <div className="icon green">
              <i className="bi bi-clipboard-check-fill"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="analysis-card">
            <div>
              <h6>Overall Score</h6>
              <h3>82%</h3>
            </div>

            <div className="icon purple">
              <i className="bi bi-award-fill"></i>
            </div>
          </div>
        </div>

      </div>

      {/* Career Recommendations */}

      <div className="section-card mt-4">

        <h4>Top Career Recommendations</h4>

        {careerMatches.map((career, index) => (
          <div key={index} className="mb-4">

            <div className="d-flex justify-content-between">
              <span>{career.role}</span>
              <strong>{career.score}% Match</strong>
            </div>

            <div className="progress mt-2">
              <div
                className="progress-bar bg-primary"
                style={{ width: `${career.score}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

      {/* Skill Gap */}

      <div className="section-card mt-4">

        <h4>Skill Gap Analysis</h4>

        {skillGaps.map((skill, index) => (
          <div key={index} className="mb-4">

            <div className="d-flex justify-content-between">
              <span>{skill.skill}</span>
              <strong>{skill.score}%</strong>
            </div>

            <div className="progress mt-2">
              <div
                className="progress-bar bg-success"
                style={{ width: `${skill.score}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

      {/* Learning Path */}

      <div className="section-card mt-4">

        <h4>Recommended Learning Path</h4>

        <ul className="learning-list">

          {learningPath.map((item, index) => (
            <li key={index}>
              <i className="bi bi-check-circle-fill"></i>
              {item}
            </li>
          ))}

        </ul>

      </div>

      {/* Summary */}

      <div className="section-card mt-4">

        <h4>Career Readiness Summary</h4>

        <div className="row">

          <div className="col-md-6 mb-3">
            <div className="summary-box">
              <span>Placement Readiness</span>
              <strong>82%</strong>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="summary-box">
              <span>Technical Skills</span>
              <strong>Strong</strong>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="summary-box">
              <span>Communication</span>
              <strong>Needs Improvement</strong>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="summary-box">
              <span>Resume Quality</span>
              <strong>Good</strong>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CareerAnalysis;