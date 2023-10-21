import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

const BrandProduct = () => {
  const [branded, setBranded] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    fetch("https://car-rent-server-p9l7xvtsh-jubayer3112.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setBranded(data));
  }, []);

  const brandProduct = branded.filter((brands) => brand === brands.brand);
  console.log(brandProduct.length);

  return (
    <>
      <Slider />
      {brandProduct.length > 0 ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {brandProduct.map((branding) => (
              <ProductCard key={branding.id} branding={branding} />
            ))}
          </div>
        </div>
      ) : (
        
        <div>
          <img
            src="https://www.pharmacy.precureplus.com/assets/site/images/no_result.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default BrandProduct;
