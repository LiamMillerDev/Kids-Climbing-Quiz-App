import React from "react";

const Results = ({ score, totalQuestions, handleRetakeQuiz }) => {
  return (
    <div>
      <div>
        You scored {score} out of {totalQuestions}
      </div>
      <button onClick={handleRetakeQuiz}>Retake Quiz</button>
    </div>
  );
};

export default Results;
