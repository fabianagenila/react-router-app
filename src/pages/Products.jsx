import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  return (
    <>
      <p>ID do Produto: {id}</p>
    </>
  );
};

export default Products;
