import React, { useContext, useRef } from "react";
import { context } from "./context";
import { useNavigate } from "react-router-dom";
import "./Create.css";
const Create = () => {
  const inputRef = useRef(null);
  const data = useContext(context);
  const navigate = useNavigate();

  const { id, setId, text, setText } = data;

  const handlesubmit = () => {
    const Heading = inputRef.current.heading.value;
    const Blog = inputRef.current.blog.value;
    const id = Math.floor(Math.random() * 1000);
    // setId(randomNumber);
    setText([...text, { Heading, Blog, id }]);
    navigate("list");
  };

  return (
    <div>
      <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
        <label className="heading">Heading : </label>
        <textarea type="text" name="heading" className="txt-ar"></textarea>
        <br />
        <br />
        <label className="heading">Blog : </label>
        <textarea
          type="text"
          name="blog"
          className="txt-ar"
          spellCheck="false"
        ></textarea>
        <button onClick={handlesubmit} className="btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
