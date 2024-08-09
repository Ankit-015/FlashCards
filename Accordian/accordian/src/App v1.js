import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor inida n aa ruppess chinesse moedl russia missilie israel war cant wait to see getting all good."
  },
  {
    title: "How long do i have to return my chair?",
    text: "Lorem ipsum dolor inida n aa ruppess chinesse moedl russia missilie israel war cant wait to see getting all good."
  },
  {
    title: "Do you ship to countries outside the IND?",
    text: "Lorem ipsum dolor inida n aa ruppess chinesse moedl russia missilie israel war cant wait to see getting all good."
  }
]


function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  return (
    <div className="accordian">
      {data.map((item, i) => <AccordianItem num={i} title={item.title} text={item.text} />)}
    </div>
  )
}

function AccordianItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="num">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}

    </div>
  )
}

export default App;
