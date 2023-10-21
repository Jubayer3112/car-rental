import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CartItem = ({ product, updateCart, setUpdateCart }) => {
  const { _id, image, title, cartPrice } = product;

  console.log(updateCart);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://car-rent-server-p9l7xvtsh-jubayer3112.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingCart = updateCart.filter(
                (remCart) => remCart._id !== id
              );
              setUpdateCart(remainingCart);
              console.log(remainingCart);
            }
          });
      }
    });
    console.log(id);
  };
  return (
    <div>
      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
        <div className="shrink-0 relative">
          <img
            className="h-24 w-24 max-w-full rounded-lg object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="relative flex flex-1 flex-col justify-between">
          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
            <div className="pr-8 sm:pr-5">
              <p className="text-base font-semibold text-gray-900">{title}</p>
            </div>

            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                {cartPrice}
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
            <button
              onClick={() => handleDelete(_id)}
              type="button"
              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default CartItem;
