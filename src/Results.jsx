import React from "react";

function Results({ score, totalQuestions, handleRetakeQuiz, elapsedTime }) {
  const seconds = ("0" + (Math.floor(elapsedTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor(elapsedTime / 60000)).slice(-2);

  return (
    <div className="results-section">
      <div className="results-card">
        <h2>
          You scored {score} out of {totalQuestions}!
        </h2>
        <h2>
          Your time was: {minutes}:{seconds}
        </h2>
        <button onClick={handleRetakeQuiz}>Retake Quiz</button>
      </div>
    </div>
  );
}

export default Results;
