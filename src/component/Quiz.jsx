import React, { Profiler, useState } from "react";
import { quizData } from "../helper/quizData";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleChangeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOption(0);
    setScore(0);
  };



  return (
    <>
      <div className="container">
        <p className="heading-text">Quiz App</p>
        {showResult ? (
          <QuizResult
            tryAgain={resetAll}
            score={score}
            totalScore={quizData.length}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {quizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {quizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    className={`option-btn ${
                      selectedOption === index + 1 ? "checked" : null
                    }`}
                    key={index}
                    onClick={() => setSelectedOption(index + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={handleChangeQuestion}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
