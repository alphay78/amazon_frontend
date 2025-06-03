import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../Currencyformat/Currencyformat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc , renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [ state, dispatch ] = useContext(DataContext); 
console.log("here ",useContext(DataContext))
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate ?? 0} precision={0.1} /> {/* ✅ Fix */}
          <small>{rating?.count ?? 0}</small> {/* ✅ Fix */}
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

       { renderAdd && <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>}
      
      </div>
    </div>
  );
}

export default ProductCard;
