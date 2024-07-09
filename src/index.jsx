import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import Lesson04 from "./lessons/lesson_04/Lesson04";
// import Lesson01 from './lessons/lesson_01/Lesson01';
// import Lesson02 from './lessons/lesson_02/Lesson02';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <Lesson01 /> */}
    {/* <Lesson02/> */}
    {/* <MyForm/> */}
    {/* <Counter /> */}
    {/* <Homework04 /> */}
    {/* <Lesson03 /> */}
    <Lesson04 />
  </>
);
