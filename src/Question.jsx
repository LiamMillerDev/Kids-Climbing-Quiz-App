import React from "react";

const Question = ({
  data,
  handleAnswerOptionClick,
  selectedAnswer,
  isSubmitted,
}) => {
  return (
    <>
      <img src={data.image} alt="question" />
      <div className="question-section">
        <div className="question-text">{data.question}</div>
      </div>
      <div className="answer-section">
        {data.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answer)}
            style={{
              backgroundColor: isSubmitted
                ? answer === data.correctAnswer
                  ? "green"
                  : "red"
                : "",
              pointerEvents: isSubmitted ? "none" : "",
              border:
                answer === selectedAnswer && !isSubmitted
                  ? "10px solid blue"
                  : "",
              outline: "none",
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
