import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating, author, subtitle }) => {
  const dispatch = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-author">{author}</p>
        <div className="product-business">
          <div className="product-rating">
            {typeof rating === 'number' ? (
              Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} className="star-icon" />
              ))
            ) : (
              <p>Nenhuma Avaliação Avaliada</p>
            )}
          </div>
          <p className="product-price">
            <h2>$ {price}</h2>
          </p>
        </div>
      </div>
      <img src={image} alt="imagem-do-produto" />
      <button onClick={addToBasket}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;