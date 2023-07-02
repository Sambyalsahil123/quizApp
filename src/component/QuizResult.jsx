import React from "react";

const QuizResult = ({ score, totalScore, tryAgain }) => {
  console.log(score, "total score");
  return (
    <>
      <div className="show-score">
        Your Score:{score}
        <br />
        Total Score:{totalScore}
      </div>
      <button id="next-button" onClick={tryAgain}>
        TryAgain
      </button>
    </>
  );
};

export default QuizResult;
