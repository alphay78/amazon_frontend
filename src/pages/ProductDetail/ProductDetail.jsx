import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loder";

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false)
       
      })
      .catch((err) => {
        console.log(err);
      setisLoading(false)
       
      });
  }, [productId]); 


  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
