import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerProductsSearchBox(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("search seller products...");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(
      `/seller/${props.sellerId}/name/${name}/category/Any/min/0/max/0/rating/0/order/newest/pageNumber/1`
    );
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          placeholder={props.placeHolder}
          onChange={(e) => {
            if (e.target.value === "") setName("search seller products...");
            else setName(e.target.value);
          }}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
