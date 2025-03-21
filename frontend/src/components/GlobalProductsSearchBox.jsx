import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GlobalProductsSearchBox(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") alert("Search box is empty");
    else navigate(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          placeholder={props.placeHolder}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
