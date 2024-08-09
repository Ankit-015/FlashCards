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
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((item, i) => {
        return <AccordianItem
          num={i}
          title={item.title}
          key={item.title}
          curOpen={curOpen}
          onOpen={setCurOpen}> {item.text}
        </AccordianItem>
      })}
      <AccordianItem
        num={21}
        title="Rules For a Devotee"
        key="Rules For a Devotee"
        curOpen={curOpen}
        onOpen={setCurOpen}>
        <p>Allows Shree Krishn Devotess to: </p>
        <ul>
          <li>Reading Shrimad Bhagwat Geeta</li>
          <li>Pray in temples</li>
          <li>Perform proper rituals</li>
        </ul>
      </AccordianItem>
    </div>
  )
}

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = curOpen === num;
  const isClose = isOpen;
  function handleToggle(e) {
    if(!isClose) onOpen(num);
    else onOpen(false)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={(e) => handleToggle(e)}>
      <p className="num">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}

    </div>
  )
}

export default App;
