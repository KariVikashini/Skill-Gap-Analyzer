import { useState } from "react";
import {
  uploadResume,
  getResumeUrl,
  downloadResume,
} from "../../services/resumeService";
import "./Resume.css";

function Resume() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Choose a PDF");
      return;
    }

    try {
      const response = await uploadResume(user.id, file);

      console.log(response.data);

      // Read latest user
      const loggedUser = JSON.parse(localStorage.getItem("user"));

      // Add new property
      const updatedUser = {
        ...loggedUser,
        resumeUploaded: true,
      };

      // Save again
      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      console.log(
        "Updated User:",
        JSON.parse(localStorage.getItem("user"))
      );

      alert("Resume Uploaded Successfully");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="container mt-4">

      <div className="card p-4">

        <h2>Resume Management</h2>

        <hr />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        <br />

        <div className="resume-buttons">

          <button
            className="btn btn-primary"
            onClick={handleUpload}
          >
            Upload Resume
          </button>

          <button
            className="btn btn-success"
            onClick={() => window.open(getResumeUrl(user.id))}
          >
            View Resume
          </button>

          <button
            className="btn btn-warning"
            onClick={() => downloadResume(user.id)}
          >
            Download Resume
          </button>

        </div>

      </div>

    </div>
  );
}

export default Resume;