import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../../assets/Data/product";

const UpdateProduct = () => {
  const { id } = useParams();
  const { fetchProducts, products, updateProduct } = useProductStore();
  const [submited, setSubmited] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      if (result.success) {
        const seletedProduct = products.find((item) => item.id == id);
        if (seletedProduct) {
          console.log(seletedProduct);
          setProduct(seletedProduct);
          // setImage1(seletedProduct.image1);
          // setImage2(seletedProduct.image2);
        }
      } else {
        console.log(result.message);
      }
    };
    fetchData();
  }, [id, fetchProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);

    if (!product.name || !product.price || !product.brand) {
      alert("Please fill all fields");
      setSuccess(false);
      setMessage("Please fill all fields");
      return;
    }

    try {
      const updatedProduct = new FormData();
      updatedProduct.append("name", product.name);
      updatedProduct.append("price", product.price);
      updatedProduct.append("brand", product.brand);
      updatedProduct.append("discount", product.discount || 0);
      if (image1) {
        updatedProduct.append("image1", image1);
      }
      if (image2) {
        updatedProduct.append("image2", image2);
      }

      const result = await updateProduct(id, updatedProduct);

      if (result.success) {
        setSuccess(true);
        setMessage(result.message);
        setProduct({
          name: "",
          price: 0,
          brand: "",
          discount: 0,
        });
        setImage1(null);
        setImage2(null);
        alert(result.message);
      } else {
        setSuccess(false);
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setSuccess(false);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div>
      {product ? (
        <section className="px-3">
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-16 border border-gray-200">
            <h2 className="text-2xl text-gray-600 text-center mb-6">
              Update Product
            </h2>
            {submited && !success ? (
              <div className="text-red-500 text-center mb-4">{message}</div>
            ) : (
              <div className="text-green-500 text-center mb-4">{message}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Brand
                </label>
                <select
                  name="brand"
                  id="brand"
                  onChange={handleChange}
                  value={product.brand}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Brand</option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Realme">Realme</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Nokia">Nokia</option>
                  <option value="Huawei">Huawei</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Discount
                </label>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Image1
                </label>
                <input
                  type="file"
                  id="image1"
                  name="image1"
                  onChange={(e) => setImage1(e.target.files[0])}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Image2
                </label>
                <input
                  type="file"
                  id="image2"
                  name="image2"
                  onChange={(e) => setImage2(e.target.files[0])}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
            </form>
          </div>
        </section>
      ) : (
        <h1 className="text-center mt-16 text-red-500 text-2xl">
          No product found
        </h1>
      )}
    </div>
  );
};

export default UpdateProduct;
