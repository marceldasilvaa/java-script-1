import { useParams } from "react-router-dom";

import "./Product.css";

const Product = () => {
  // 4 - rota dinamica
  const { id } = useParams();

  return (
    <div>
      <p>ID do produto: {id}</p>
    </div>
  );
};

export default Product;
