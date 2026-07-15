import { useState } from "react";
import "./Questions.css";
import { FaPlusCircle } from "react-icons/fa";

function Questions() {
  const [category, setCategory] = useState("Java");

  return (
    <div className="questions-page">

      <div className="questions-header">
        <div>
          <h2>Question Management</h2>
          <p>Add assessment questions by category.</p>
        </div>
      </div>

      <div className="question-card">

        <h4 className="mb-4">
          <FaPlusCircle className="me-2 text-primary" />
          Add New Question
        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">
            <label>Category</label>

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Java</option>
              <option>SQL</option>
              <option>Aptitude</option>
              <option>Verbal</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Difficulty</label>

            <select className="form-select">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label>Question</label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter question..."
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Option A</label>
            <input className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Option B</label>
            <input className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Option C</label>
            <input className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Option D</label>
            <input className="form-control" />
          </div>

          <div className="col-md-6 mb-4">
            <label>Correct Answer</label>

            <select className="form-select">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
              <option>Option D</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label>Marks</label>

            <input
              type="number"
              className="form-control"
              defaultValue={1}
            />
          </div>

        </div>

        <div className="d-flex gap-3">

          <button className="btn btn-primary">
            Save Question
          </button>

          <button className="btn btn-secondary">
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Questions;