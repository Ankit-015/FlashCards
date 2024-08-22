import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  // console.log(movieRating)
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={5}
        className="blue"
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={10}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <StarRating
      maxRating={5}
      className="red"
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
