import React from "react";
import { useState } from "react";
import cat from "../assets/cat.svg";
import cat1 from "../assets/cat1.svg";
import "./PersonList.css";

export const PersonList = () => {
  const [cats, setCats] = useState([
    { id: 1, name: "Mali", gender: "Female" },
    { id: 2, name: "Kaijiaw", gender: "Male" },
    { id: 3, name: "Marvel", gender: "Male" },
    { id: 4, name: "Uni", gender: "male" },
    { id: 5, name: "Moji", gender: "Female" },
    { id: 6, name: "Sushi", gender: "Female" },
  ]);

  const [show, setShow] = useState(false);

  return (
    <div className="PersonList">
        <div className="header">
            <h2 style={{fontSize:"25px"}}>My Cats: {cats.length}</h2>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        <ul>
            {show && 
                cats.map((item) => (
                    <li key={item.id}>
                        <img alt="Cat" src={item.gender == "Male" ? cat : cat1} width={50} height={50}/>
                        <p>{item.name}</p>
                        <div className="control">
                            <button id="delete">Delete</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  );
};
