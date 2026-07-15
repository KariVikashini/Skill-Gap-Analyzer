import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../assets/styles/Assessment.css";

import {
  FaJava,
} from "react-icons/fa";

import { MdQuiz } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

import {
  BsChatDotsFill
} from "react-icons/bs";

function AssessmentHome() {

    const navigate = useNavigate();

    const assessments = [

        {
            title: "Java",
            icon: <FaJava size={55} />,
            color: "#2563EB",
            description: "Core Java, OOP, Collections, Exception Handling",
            skill: "java"
        },

        {
            title: "SQL",
            icon: <FaDatabase size={55} />,
            color: "#16A34A",
            description: "Queries, JOIN, GROUP BY, Aggregate Functions",
            skill: "sql"
        },

        {
            title: "Aptitude",
            icon: <MdQuiz size={55} />,
            color: "#F59E0B",
            description: "Logical Reasoning, Numbers, Time & Work",
            skill: "aptitude"
        },

        {
            title: "Verbal",
            icon: <BsChatDotsFill size={50} />,
            color: "#DC2626",
            description: "Grammar, Vocabulary & Reading",
            skill: "verbal"
        }

    ];

    return (

        <>

            <Navbar title="Skill Assessment" />

            <div className="d-flex">

                <Sidebar role="student" />

                <div className="assessment-container">

                    <div className="assessment-header">

                        <h2>Select Your Assessment</h2>

                        <p>
                            Choose a skill and complete the assessment.
                            Each assessment contains 5 multiple-choice questions.
                        </p>

                    </div>

                    <div className="row">

                        {assessments.map((item) => (

                            <div className="col-md-6 col-lg-3 mb-4" key={item.skill}>

                                <div className="assessment-card">

                                    <div
                                        className="assessment-icon"
                                        style={{
                                            backgroundColor: item.color
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <h4>{item.title}</h4>

                                    <p>
                                        {item.description}
                                    </p>

                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() =>
                                            navigate(`/assessment/${item.skill}`)
                                        }
                                    >
                                        Start Test
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </>

    );

}

export default AssessmentHome;