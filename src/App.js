import React, { useState } from "react";
import Post from "./components/Post/Post";
import "./App.css";

const App = () => {
  const [isContentOpen, setContentHandler] = useState(true);
  const contentHandler = () => setContentHandler(!isContentOpen);

  const ANAKIN_IMAGE =
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
  const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  const propsData = {
    authorData: {
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
    msgs: 482,
    shares: 146,
    likes: 882,
  };

  return (
    <Post
      {...propsData}
      isContentOpen={isContentOpen}
      contentHandler={contentHandler}
    />
  );
};

export default App;
