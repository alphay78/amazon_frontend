import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css"; // Ensure you have this CSS module

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
        isLoading(false)
      });
  }, []);

  return (

    isLoading?(<Loader/>):
    (<section className={classes.products_container}>
      {products?.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct}
        renderAdd={true} 
        />
      ))}
    </section>)
  );
}

export default Product;
