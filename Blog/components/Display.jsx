import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "./context";
import "./Display.css";



const Display = () => {
  const data = useContext(context);
  const { text } = data;


  const { id } = useParams();
  const para = { id };

  const filtered = data.text.filter((item) => {
    return item.id == para.id;
  });
  return (
    <div className="box">
      <h1>
        {filtered.map((item) => {
          return (
            <div key={id}>
              <h1 className="hdn">{item.Heading}</h1>
              <p className="cntnt">{item.Blog}</p>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export default Display;
