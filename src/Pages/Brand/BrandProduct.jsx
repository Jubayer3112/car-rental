import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandProduct = () => {
  const [branded, setBranded] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBranded(data));
  }, []);

  const brandProduct = branded.filter((brands) => brand === brands.brand);

  return (
    <div>
      {
        // brandProduct.map(AllBrand=>)
      }
    </div>
  );
};

export default BrandProduct;
