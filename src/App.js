import React, { useState } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Details from "./components/Details";
import QuestionCard from "./components/QuestionCard";
import Comment from "./components/Comment";
import Results from "./components/Results";

// data
import questions from "./data/questions.json";

function App() {
  // Properties
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const resetClickHandler = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setStep(1);
  };

  return (
    <div className="relative">
      <Header />
      <div className="container w-full px-8 py-10">
        {step === 1 && (
          <Details onSetStep={setStep} onAnswerUpdate={setAnswers} />
        )}
        {step === 2 && (
          <QuestionCard
            data={questions.data[currentQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={questions.data.length}
            currentQuestion={currentQuestion}
            onSetCurrentQuestion={setCurrentQuestion}
            onSetStep={setStep}
          />
        )}
        {step === 3 && (
          <Comment
            onSetStep={setStep}
            onAnswerUpdate={setAnswers}
            onAnswersCheck={() => setShowResults(true)}
          />
        )}

        {step === 4 && (
          <Results results={answers} onReset={resetClickHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
