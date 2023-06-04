import React, { useEffect, useState } from "react";

const Question = ({
  data,
  handleAnswerOptionClick,
  selectedAnswer,
  isSubmitted,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Function to shuffle the answers
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Shuffle the answers when the question changes
  useEffect(() => {
    setShuffledAnswers(shuffle([...data.answers]));
  }, [data]);

  return (
    <>
      {data.hasImage && <img src={data.image} alt="question" />}

      <div className="question-section">
        <div className="question-text">{data.question}</div>
      </div>
      <div className="answer-section">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answer)}
            style={{
              backgroundColor: isSubmitted
                ? answer === data.correctAnswer
                  ? "var(--success-color)"
                  : "var(--danger-color)"
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
