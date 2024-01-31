import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
  },
  {
    id: 5128,
    question: "What is the virtual DOM in React?",
    answer: "A lightweight copy of the real DOM",
  },
  {
    id: 7342,
    question: "What is React Router used for?",
    answer: "Navigation in React applications",
  },
  {
    id: 9814,
    question: "What is the purpose of the useEffect hook in React?",
    answer: "To perform side effects in functional components",
  },
  {
    id: 6735,
    question: "What is JSX in React?",
    answer:
      "JavaScript XML, a syntax extension for JavaScript recommended by React",
  },
  {
    id: 4231,
    question: "What is the role of ReactDOM in React?",
    answer: "To render React elements into the DOM",
  },
  {
    id: 3756,
    question: "What is the purpose of the useMemo hook in React?",
    answer: "To memoize the result of a computation in a functional component",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
