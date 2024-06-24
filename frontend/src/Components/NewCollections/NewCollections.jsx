import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import newCollectionData from "../Assets/new_collections";

function NewCollections(props) {
  const {} = props;

  return (
    <div>
      <ProductCard
        props={props}
        title="New Collections"
        productData={newCollectionData}
      ></ProductCard>
    </div>
  );
}

NewCollections.propTypes = {};

export default NewCollections;
