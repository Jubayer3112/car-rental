import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

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
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {brandProduct.map((branding) => (
          <ProductCard key={branding.id} branding={branding} />
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
