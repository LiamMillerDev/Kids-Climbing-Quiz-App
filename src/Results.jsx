import React from "react";

function Results({ score, totalQuestions, handleRetakeQuiz, elapsedTime }) {
  const seconds = ("0" + (Math.floor(elapsedTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor(elapsedTime / 60000)).slice(-2);

  return (
    <div className="results-section">
      <h2>
        <span>
          You scored {score} out of {totalQuestions}
        </span>
      </h2>
      <h2>
        <span>
          Time: {minutes} : {seconds}
        </span>
      </h2>
      <button onClick={handleRetakeQuiz}>Retake Quiz</button>
    </div>
  );
}

export default Results;
