const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.image.value;
    const brand = form.brandName.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const newProduct = { name, photo, brand, price, shortDescription, rating };
    console.log(newProduct);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                {/* Form Header */}
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Add a Product</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="leading-loose">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Product Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="image" className="leading-loose">
                        Image
                      </label>
                      <input
                        required
                        type="text"
                        id="image"
                        name="image"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Image URL"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="brandName" className="leading-loose">
                        Brand Name
                      </label>
                      <select
                        required
                        id="brandName"
                        name="brandName" // Add the name attribute here
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
                    <div className="flex flex-col">
                      <label htmlFor="price" className="leading-loose">
                        Price
                      </label>
                      <input
                        required
                        type="text"
                        id="price"
                        name="price"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Price"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="shortDescription"
                        className="leading-loose"
                      >
                        Short Description
                      </label>
                      <input
                        required
                        type="text"
                        id="shortDescription"
                        name="shortDescription"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Short Description"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="rating" className="leading-loose">
                        Rating
                      </label>
                      <input
                        required
                        type="text"
                        id="rating"
                        name="rating"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Rating"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      type="submit"
                      className="bg-[#ff5030] flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
