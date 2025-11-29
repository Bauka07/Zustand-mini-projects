import { useQuizStore } from "./store";

const Question = () => {
  const {
    questions,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    answers,
    showScore,
    score,
    currentQuestion,
  } = useQuizStore();

  if (showScore) {
    return (
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-semibold">Your Score</h2>
        <p className="mt-4 text-lg">
          You scored {score} out of {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="mt-6 px-4 py-2 bg-blue-500 text-white
           rounded hover:bg-blue-600"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const handleSubmit = () => nextQuestion();

  const question = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  return (
    <div className="w-3/4 p-6">
      <h2 className="text-2xl font-semibold">{question.question}</h2>
      <div className="mt-4">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              checked={currentAnswer === index}
              name={`question-${currentQuestion}`}
              onChange={() => selectAnswer(index)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <div className="mt-6">
        {currentQuestion > 0 && (
          <button
            className="mr-4 px-4 py-2 bg-gray-500
             text-white rounded hover:bg-gray-600"
            onClick={() => prevQuestion()}
          >
            Previous
          </button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <button
            className="px-4 py-2 bg-blue-500
            text-white rounded hover:bg-blue-600"
            onClick={() => nextQuestion()}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500
             text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
