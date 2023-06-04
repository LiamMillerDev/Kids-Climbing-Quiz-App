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
  const [time, setTime] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    if (!quizStart) {
      setQuizStart(true);
    }
    setSelectedAnswer(answer);
    setIsSubmitted(true);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        setQuizStart(false);
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
    setQuizStart(false); // Reset timer and timer state
    setTime(0);
  };

  return (
    <div className="app">
      {!showScore && (
        <div className="top-bar">
          <Timer start={quizStart} setTime={setTime} />
          <div className="progress-bar">
            <progress value={currentQuestion} max={questions.length} />
          </div>
        </div>
      )}
      {showScore ? (
        <Results
          score={score}
          elapsedTime={time}
          totalQuestions={questions.length}
          handleRetakeQuiz={handleRetakeQuiz}
        />
      ) : (
        <Question
          data={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
          selectedAnswer={selectedAnswer}
          isSubmitted={isSubmitted}
        />
      )}
    </div>
  );
}

export default App;
