import React from "react";

const Results = ({ results, onReset }) => {
  return (
    <div className="py-8">
      <h1 className="uppercase text-3xl font-bold">Your answers</h1>
      <ul className="py-4 divide-y">
        {results.map((result, index) => (
          <li key={index}>
            <div className="flex flex-col items-start justify-start py-4">
              <p className="font-bold text-xl">{result.q}</p>
              <p className="text-lg">
                Your answer: {(index < 0 ? ", " : "") + result.a}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="pt-10">
        <button
          className="block bg-buttonBlue w-full text-white text-xl mt-4 py-4 px-8 rounded font-medium cursor-pointer transition ease-in-out duration-300 hover:bg-buttonBlueDark"
          onClick={onReset}
        >
          Start all over
        </button>
      </div>
    </div>
  );
};

export default Results;
