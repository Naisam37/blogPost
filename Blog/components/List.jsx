import React, { useContext } from "react";
import { context } from "./context";
import { useNavigate } from "react-router-dom";
import "./list.css";

const List = () => {
  const data = useContext(context);

  const navigate = useNavigate();


  return (
    <div >
      <ul >
        {data.text.map((item, index) => {
          return (
            <div key={index}>
              <li className="lst">
                <h1
                  onClick={() => {
                    navigate(`/list/${item.id}`);
                  }}
                >
                  {item.Heading}
                </h1>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
