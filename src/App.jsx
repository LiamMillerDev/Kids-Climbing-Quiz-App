import React, { useState } from "react";
import { questions } from "./quizData.jsx";
import Question from "./Question.jsx";
import Results from "./Results.jsx";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  };

  return (
    <div className="app">
      {showScore ? (
        <Results
          score={score}
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
