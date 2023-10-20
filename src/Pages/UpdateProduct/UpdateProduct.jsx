const UpdateProduct = () => {
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

            <form>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Product Details</p>
                    <p>Please fill out the following fields.</p>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="image">Image</label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Image URL"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Product Name"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="brand">Brand Name</label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Brand Name"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="type">Type</label>
                    <input
                      type="text"
                      name="type"
                      id="type"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Product Type"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Product Price"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="short_description">Short Description</label>
                    <input
                      type="text"
                      name="short_description"
                      id="short_description"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Short Description"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="rating">Rating</label>
                    <input
                      type="text"
                      name="rating"
                      id="rating"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
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
