import Link from "next/link";
import React from "react";
import { Button } from "./button";
import "./addcard.css";

export const Addcard = ({ props }) => {
  return (
    <Link href={"/products/" + props.id}>
      <div class="product-card">
        <div class="product-tumb">
          <img src={props.ImageUrl} alt="Rendering..." />
        </div>
        <div class="product-details">
          {/* <span class="product-catagory">Women,bag</span> */}
          <h4>
            <a href="">{props.ProductName}</a>
          </h4>
          <p>{props.Description}</p>
          <div class="product-bottom-details">
            <div class="product-price">$ {props.ProductPrice}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
