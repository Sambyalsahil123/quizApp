import React, { Profiler } from "react";
import Quiz from "./component/Quiz";
import "./App.css";
const App = () => {
  const callback = (
    id, // The "id" prop of the Profiler tree that has just committed
    phase, // The current phase ("mount" or "update")
    actualDuration, // The time spent rendering the committed update
    baseDuration, // The estimated time to render the entire subtree without memoization
    startTime, // When React began rendering this update
    commitTime, // When React committed this update
    interactions // The Set of interactions belonging to this update
  ) => {
    console.log(
      `1 Component "${id}" took ${actualDuration}ms to render in ${phase} phase.`
    );
  };
  return (
    <>
      <Profiler id="quizResult" onRender={callback}>
        <Quiz />
      </Profiler>
    </>
  );
};

export default App;
