import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const Products = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);
  return (
    <>
      <p>ID do Produto: {id}</p>
      {error && <p>Ocorreu um erro!</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Products;
