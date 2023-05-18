
const AddAToy = () => {
    
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form values using e.target.elements
    const formData = {
      pictureUrl: e.target.elements.pictureUrl.value,
      name: e.target.elements.name.value,
      sellerName: e.target.elements.sellerName.value,
      sellerEmail: e.target.elements.sellerEmail.value,
      subCategory: e.target.elements.subCategory.value,
      price: e.target.elements.price.value,
      rating: e.target.elements.rating.value,
      quantity: e.target.elements.quantity.value,
      description: e.target.elements.description.value,
    };
    console.log(formData);

    // Perform your submit logic here with the formData object

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 text-center gFont">Toy <span className=" text-slate-400">Form</span></h2>
      <div className="px-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 shadow-md p-10 border border-[#4acdd5]">
        <div>
          <label htmlFor="pictureUrl" className="block mb-2">
            Picture URL:
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="sellerName" className="block mb-2">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="sellerEmail" className="block mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="subCategory" className="block mb-2">
            Sub-category:
          </label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-2">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="block mb-2">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            rows={4}
          />
        </div>
        <div className="col-span-2 mx-auto">
            <input className="px-10 py-3 bg-[#4acdd5] text-white rounded-md" type="submit" value="Submit" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddAToy;
