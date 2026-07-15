import { useState, useRef } from "react";
import "./Speaking.css";

function Speaking() {
  const questions = [
    "Introduce yourself in about one minute.",
    "Describe your favorite technology.",
    "Why do you want to become a software engineer?",
    "Talk about a challenge you have overcome.",
    "Describe your dream company."
  ];

  const [question] = useState(() => questions[Math.floor(Math.random() * questions.length)]);

  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [time, setTime] = useState(0);

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const timerRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(chunks.current, {
        type: "audio/webm",
      });

      const url = URL.createObjectURL(blob);

      setAudioURL(url);

      chunks.current = [];
    };

    mediaRecorder.current.start();

    setRecording(true);

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    mediaRecorder.current.stop();

    clearInterval(timerRef.current);

    setRecording(false);
  };

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container-fluid speaking-page">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>🎤 Speaking Assessment</h2>
          <p className="text-muted">
            Improve your communication skills through AI evaluation.
          </p>
        </div>
      </div>

      <div className="card shadow-sm instruction-card mb-4">
        <div className="card-body">
          <h5>Instructions</h5>

          <ul>
            <li>Speak clearly.</li>
            <li>Try to speak for at least 60 seconds.</li>
            <li>Avoid long pauses.</li>
            <li>Your voice will be evaluated for fluency.</li>
          </ul>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">

          <h5>Today's Question</h5>

          <div className="question-box">
            {question}
          </div>

        </div>
      </div>

      <div className="card shadow-sm mb-4">

        <div className="card-body text-center">

          <h5>Recorder</h5>

          <h1 className="timer">
            {formatTime()}
          </h1>

          {!recording ? (
            <button
              className="btn btn-success record-btn"
              onClick={startRecording}
            >
              🎙 Start Recording
            </button>
          ) : (
            <button
              className="btn btn-danger record-btn"
              onClick={stopRecording}
            >
              ⏹ Stop Recording
            </button>
          )}

          {audioURL && (
            <div className="mt-4">

              <audio controls src={audioURL}></audio>

              <br />

              <button className="btn btn-primary mt-3">
                Submit Recording
              </button>

            </div>
          )}

        </div>

      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <h5>Previous Attempts</h5>

          <table className="table mt-3">

            <thead>
              <tr>
                <th>Date</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>12 Jul 2026</td>
                <td>78%</td>
                <td>
                  <span className="badge bg-success">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>10 Jul 2026</td>
                <td>70%</td>
                <td>
                  <span className="badge bg-warning text-dark">
                    Needs Improvement
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Speaking;