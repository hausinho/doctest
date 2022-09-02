import React, { useState, useEffect, useRef } from "react";

const QuestionCard = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  currentQuestion,
  onSetCurrentQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [activeItem, setActiveItem] = useState();
  const inputsWrapper = useRef();

  useEffect(() => {
    const findCheckedInputs = inputsWrapper.current.querySelectorAll(".choice");
    if (findCheckedInputs) {
      findCheckedInputs.forEach((input) => {
        input.checked = false;
      });
      setActiveItem("");
    }
  }, [data]);

  const changeHandler = (e) => {
    if (data.type !== "multiple") {
      setSelected(e.target.value);
    } else {
      setSelected([...selected, e.target.value]);
    }
    if (error) {
      setError("");
    }
  };

  const nextQuestionClickHandler = () => {
    if (!selected.length) {
      return setError("Please select at least one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);

    setSelected([]);

    if (currentQuestion < numberOfQuestions - 1) {
      onSetCurrentQuestion(currentQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="c-questionCard">
      <h3 className="text-2xl">{data.question}</h3>
      <div ref={inputsWrapper}>
        <ul className="py-4 divide-y">
          {data.choices.map((choice, index) => (
            <li
              key={choice.id}
              className={`px-6 ${activeItem === index ? "active" : "ml-1"}`}
              onClick={() => setActiveItem(index)}
            >
              <div className="flex items-center space-x-3 py-6 w-full">
                <label className="flex m-0 cursor-pointer">
                  <input
                    type={data.type !== "multiple" ? "radio" : "checkbox"}
                    name="answer"
                    id={choice.id}
                    value={choice.text}
                    onChange={(e) => changeHandler(e)}
                    className="choice border-gray-300 rounded h-6 w-6"
                  />
                </label>
                <h1 className="text-gray-700 font-medium leading-none">
                  {choice.text}
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {error && <div className="text-red-700">{error}</div>}

      <button
        className={`block bg-buttonBlue w-full text-white text-xl mt-4 py-4 px-8 rounded font-medium ${
          !selected.length
            ? "pointer-events-none opacity-50"
            : "cursor-pointer transition ease-in-out duration-300 hover:bg-buttonBlueDark"
        }`}
        onClick={() => nextQuestionClickHandler()}
        disabled={!selected.length ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
