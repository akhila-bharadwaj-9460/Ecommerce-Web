import React from "react";
import _isEmpty from "lodash/isEmpty";
import ProductCard from "../ProductCard/ProductCard";
import productData from "../Assets/data";

function Popular(props) {
  return (
    <div>
      <ProductCard
        props={props}
        title="Hottest Trends Spotted"
        productData={productData}
      ></ProductCard>
    </div>
  );
}

export default Popular;
