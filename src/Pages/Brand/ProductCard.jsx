import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ branding }) => {
  const { _id, name, photo, brand, price, rating } = branding;
  return (
    <div className="relative m-10 flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover" src={photo} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {brand}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-slate-900">
            {name}
          </h5>
        </a>

        {/* <h5 className=" tracking-tight text-slate-900">{shortDescription.slice(0,100)}</h5> */}

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
          </p>
          <div className="flex items-center">
            {/* Repeat the above SVG for other stars */}
            <span className="mr-2 ml-3 flex items-center gap-2 rounded bg-slate-900 text-yellow-200 px-2.5 py-0.5 text-lg font-semibold">
              {rating}
              <BsStarFill />
            </span>
          </div>
        </div>
        <Link
          to={`/products/${_id}`}
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Product Details
        </Link>
        <Link
          to={`/updateproduct/${_id}`}
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3"
        >
          Update Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
