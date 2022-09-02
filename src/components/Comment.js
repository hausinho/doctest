import { useState } from "react";

const Comment = ({ onAnswerUpdate, onSetStep }) => {
  const [formData, setFormData] = useState("");
  const [isFinished, setFinished] = useState(false);
  const handleTextArea = (event) => {
    const { value, comment } = event.target;
    setFormData({ ...formData, comment: value });
  };

  const onFinishUp = () => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: "Your comment", a: formData.comment },
    ]);

    setFinished(true);
  };

  const nextStepHandler = (e) => {
    onSetStep(4);
  };

  return (
    <div>
      <div className="mb-8">
        <label htmlFor="name" className="block text-xl mb-2">
          Comment{" "}
          <span className="opacity-50 text-sm italic ml-2">(optional)</span>
        </label>
        <textarea
          onChange={handleTextArea}
          value={formData.comment}
          name="comment"
          rows="6"
          id="comment"
          className="w-full py-4 px-4 border border-gray-200 rounded-m focus:border-blue-600 outline-none"
          placeholder="Feel free to leave us a comment"
        ></textarea>
      </div>
      {!isFinished && (
        <button
          onClick={onFinishUp}
          className="block bg-buttonBlue w-full text-white text-xl mt-4 py-4 px-8 rounded font-medium cursor-pointer transition ease-in-out duration-300 hover:bg-buttonBlueDark"
        >
          I'm done
        </button>
      )}
      {isFinished && (
        <button
          className="block bg-buttonBlue w-full text-white text-xl mt-4 py-4 px-8 rounded font-medium cursor-pointer transition ease-in-out duration-300 hover:bg-buttonBlueDark"
          onClick={nextStepHandler}
        >
          Check your answers
        </button>
      )}
    </div>
  );
};

export default Comment;
