import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const productInfo = useLoaderData();
  const { _id, name, photo, brand, price, shortDescription, rating } =
    productInfo;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.image.value;
    const brand = form.brandName.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const updatedProduct = {
      name,
      photo,
      brand,
      price,
      shortDescription,
      rating,
    };
    // console.log(updatedProduct);
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Your Product is Updated", "success");
        }
      });
  };
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Update Product
            </h2>
            <p className="text-gray-500 mb-6">
              Please update the product information.
            </p>

            <form onSubmit={handleUpdate}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Product Details</p>
                    <p>Please fill out the following fields.</p>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue={name}
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="image">Image</label>
                    <input
                      required
                      type="text"
                      name="image"
                      id="image"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue={photo}
                      placeholder="Image URL"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="brand">Brand Name</label>
                    <select
                      required
                      defaultValue={brand}
                      id="brandName"
                      name="brandName"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="Toyota">Toyota</option>
                      <option value="Ford">Ford</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Honda">Honda</option>
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="price">Price</label>
                    <input
                      required
                      type="text"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue={price}
                      placeholder="Product Price"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="short_description">Short Description</label>
                    <input
                      required
                      type="text"
                      name="shortDescription"
                      id="short_description"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue={shortDescription}
                      placeholder="Short Description"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="rating">Rating</label>
                    <input
                      required
                      type="text"
                      name="rating"
                      id="rating"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue={rating}
                      placeholder="Product Rating"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
