import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";

const ShoppingCart = () => {
  const cartProduct = useLoaderData();
  const { user } = useContext(AuthContext);

  const loadedProduct = cartProduct.filter(
    (cart) => cart.userEmail === user.email
  );
  console.log(loadedProduct);

  return (
    <div>
      {loadedProduct.length > 0 ? (
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Your Cart
              </h1>
            </div>

            <div className="mx-auto mt-8 max-w-md lg:max-w-4xl md:mt-12">
              <div className="rounded bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    <ul className="-my-8">
                      {loadedProduct?.map((product) => (
                        <CartItem key={product._id} product={product} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <img
            className="w-[750px]"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
