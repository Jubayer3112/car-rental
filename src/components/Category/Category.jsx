import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [brands, setBrands] = useState([]) || {};

  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, [setBrands]);
  const handleShowProducts = (brandName) => {
    console.log(brandName);

  };
  return (
    <div >
      <div className=" bg-gray-100 text-center py-16">
        <h1 className="text-6xl font-bold text-[#010103]">
          Explore Our <span className="text-[#ff5030]">Brands</span>
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 container mx-auto ">
          {brands.map((brand) => (
            <Link
              to={`/brandProduct/${brand.brand_name}`}
              onClick={() => handleShowProducts(brand.brand_name)}
              key={brand.id}
              className="p-4 bg-white rounded overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                className="rounded h-80 object-cover w-full"
                src={brand.brand_image}
                alt=""
              />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-5 text-2xl font-semibold">
                    {brand.brand_name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
