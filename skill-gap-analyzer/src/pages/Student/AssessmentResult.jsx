import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../assets/styles/Assessment.css";

function AssessmentResult() {

    const navigate = useNavigate();
    const location = useLocation();

    const { skill, score, total } = location.state || {};

    const percentage = Math.round((score / total) * 100);

    let message = "";
    let badge = "";

    if (percentage >= 80) {
        message = "Excellent Performance!";
        badge = "bg-success";
    } else if (percentage >= 60) {
        message = "Good Job!";
        badge = "bg-primary";
    } else if (percentage >= 40) {
        message = "Keep Practicing!";
        badge = "bg-warning text-dark";
    } else {
        message = "Needs Improvement";
        badge = "bg-danger";
    }

    return (

        <>
            <Navbar title="Assessment Result" />

            <div className="d-flex">

                <Sidebar role="student" />

                <div className="assessment-container">

                    <div className="result-card">

                        <h2 className="text-center mb-4">

                            {skill.toUpperCase()} Assessment Completed

                        </h2>

                        <div className="text-center">

                            <h1 className="display-2 text-primary">

                                {percentage}%

                            </h1>

                            <h4>

                                Score : {score} / {total}

                            </h4>

                            <span className={`badge ${badge} mt-3 fs-6 p-2`}>

                                {message}

                            </span>

                        </div>

                        <hr className="my-4"/>

                        <div className="row text-center">

                            <div className="col">

                                <h5>Total Questions</h5>

                                <h3>{total}</h3>

                            </div>

                            <div className="col">

                                <h5>Correct Answers</h5>

                                <h3>{score}</h3>

                            </div>

                            <div className="col">

                                <h5>Wrong Answers</h5>

                                <h3>{total-score}</h3>

                            </div>

                        </div>

                        <div className="d-flex justify-content-center gap-3 mt-5">

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/assessment")}
                            >
                                Take Another Assessment
                            </button>

                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/dashboard")}
                            >
                                Back to Dashboard
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AssessmentResult;