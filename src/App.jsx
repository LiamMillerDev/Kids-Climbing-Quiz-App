import React, { useState } from "react";
import { questions } from "./quizData.jsx";
import Question from "./Question.jsx";
import Results from "./Results.jsx";
import "./App.css";
import Timer from "./Timer.jsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizStart, setQuizStart] = useState(false);
  const [elapsedTime, setTime] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
    setIsSubmitted(true);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      setIsSubmitted(false);
    }, 2000);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTime(0);
    setQuizStart(false);
  };

  const handleStartQuiz = () => {
    setQuizStart(true);
  };

  return (
    <div className="app">
      {!quizStart ? (
        <div className="start-screen">
          <div className="start-card">
            <h1>Welcome to the Quiz!</h1>
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        </div>
      ) : !showScore ? (
        <>
          <Timer start={quizStart} setTime={setTime} />
          <div className="top-bar">
            <div
              className="progress-bar"
              style={{
                width: `${(currentQuestion / questions.length) * 100}%`,
              }}
            >
              <div className="progress-bar-shine" />
            </div>
          </div>
          <Question
            data={questions[currentQuestion]}
            handleAnswerOptionClick={handleAnswerOptionClick}
            selectedAnswer={selectedAnswer}
            isSubmitted={isSubmitted}
          />
        </>
      ) : (
        <Results
          score={score}
          totalQuestions={questions.length}
          handleRetakeQuiz={handleRetakeQuiz}
          elapsedTime={elapsedTime}
        />
      )}
    </div>
  );
}

export default App;
