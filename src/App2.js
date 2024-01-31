import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    flag: "📍",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    flag: "⌛",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    flag: "🌍",
  },
  {
    title: "What is the warranty period for the chairs?",
    text: "Doloremque odit deserunt iure! Ratione, velit at nulla perspiciatis, nobis fugiat nemo, repellat corrupti vero natus.",
    flag: "🔒",
  },
  {
    title: "Can I customize the color of the chairs?",
    text: "Soluta voluptas quisquam voluptate non, saepe quam adipisci possimus iusto repellat odio.",
    flag: "🎨",
  },
  {
    title: "How are shipping costs calculated?",
    text: "Voluptas deleniti exercitationem aspernatur maiores repudiandae nam! Quibusdam quod velit voluptas repellendus itaque.",
    flag: "💰",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [selectedText, setSelectedText] = useState(null);
  function handleToggle(text) {
    setSelectedText(text == selectedText ? null : text);
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, handleToggle, selectedText }) {
  return (
    <div
      className={`item ${selectedText == text ? "open" : ""}`}
      onClick={() => handleToggle(text)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{selectedText == text ? "-" : "+"}</p>
      {selectedText == text && <div className="content-box">{text}</div>}
    </div>
  );
}
