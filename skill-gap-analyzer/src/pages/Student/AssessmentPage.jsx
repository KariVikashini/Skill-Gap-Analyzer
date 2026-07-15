import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import assessmentQuestions from "../../data/assessmentQuestions";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../assets/styles/Assessment.css";

function AssessmentPage() {

    const { skill } = useParams();
    const navigate = useNavigate();

    const questions = assessmentQuestions[skill];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const question = questions[currentQuestion];

    const handleOptionChange = (option) => {

        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: option
        });

    };

    const nextQuestion = () => {

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }

    };

    const previousQuestion = () => {

        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }

    };

    const submitAssessment = () => {

        let score = 0;

        questions.forEach((q, index) => {

            if (selectedAnswers[index] === q.answer) {
                score++;
            }

        });

        navigate("/assessment/result", {
            state: {
                skill,
                score,
                total: questions.length
            }
        });

    };

    return (

        <>
            <Navbar title={`${skill.toUpperCase()} Assessment`} />

            <div className="d-flex">

                <Sidebar role="student" />

                <div className="assessment-container">

                    <div className="assessment-question-card">

                        <div className="d-flex justify-content-between mb-3">

                            <h3>
                                {skill.toUpperCase()} Assessment
                            </h3>

                            <span className="badge bg-primary">

                                Question {currentQuestion + 1} / {questions.length}

                            </span>

                        </div>

                        <hr />

                        <h5 className="mb-4">

                            {question.question}

                        </h5>

                        {

                            question.options.map((option, index) => (

                                <div
                                    key={index}
                                    className="form-check assessment-option"
                                >

                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id={`option${index}`}
                                        checked={
                                            selectedAnswers[currentQuestion] === option
                                        }
                                        onChange={() =>
                                            handleOptionChange(option)
                                        }
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor={`option${index}`}
                                    >

                                        {option}

                                    </label>

                                </div>

                            ))

                        }

                        <div className="d-flex justify-content-between mt-5">

                            <button
                                className="btn btn-secondary"
                                onClick={previousQuestion}
                                disabled={currentQuestion === 0}
                            >

                                Previous

                            </button>

                            {

                                currentQuestion === questions.length - 1 ?

                                    (

                                        <button
                                            className="btn btn-success"
                                            onClick={submitAssessment}
                                        >

                                            Submit Assessment

                                        </button>

                                    )

                                    :

                                    (

                                        <button
                                            className="btn btn-primary"
                                            onClick={nextQuestion}
                                        >

                                            Next

                                        </button>

                                    )

                            }

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AssessmentPage;