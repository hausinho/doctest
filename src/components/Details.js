import { useState } from "react";
import PropTypes from "prop-types";

const Details = ({ onAnswerUpdate, onSetStep }) => {
  const [formData, setFormData] = useState({ name: "" });
  const nextStepHandler = (e) => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: "Your name", a: formData.name },
    ]);

    onSetStep(2);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, name: value });
  };

  return (
    <div>
      <div className="mb-8">
        <label htmlFor="name" className="block text-xl mb-2">
          Your Name
          <span className="opacity-50 text-sm italic ml-2">(optional)</span>
        </label>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          id="name"
          placeholder="Please enter your name"
          className="w-full py-4 px-4 border border-gray-200 rounded-m focus:border-blue-600 outline-none"
        />
      </div>
      <button
        className={`block bg-buttonBlue w-full text-white text-xl mt-4 py-4 px-8 rounded font-medium ${
          formData.name === ""
            ? "pointer-events-none opacity-50"
            : "cursor-pointer transition ease-in-out duration-300 hover:bg-buttonBlueDark"
        }`}
        onClick={() => nextStepHandler()}
        disabled={formData.name === "" ? true : false}
      >
        Next
      </button>
    </div>
  );
};

Details.propTypes = {};

export default Details;
