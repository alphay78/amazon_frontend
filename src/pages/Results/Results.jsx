import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  const [isLoading , setisLoading] =(false)


  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res.data); // Inspect data
        setResult(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }, [categoryName]);


  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {result.length > 0 ? (
              result.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              ))
            ) : (
              <p>No products found for the selected category.</p>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
