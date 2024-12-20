import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../assets/Data/product";
import imageUrl from "../../assets/Data/url";

const Products = () => {
  const { products, fetchProducts, deleteProduct } = useProductStore();
  const [sortProducts, setSortProducts] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await fetchProducts();
      if (!result.success) {
        console.log(result.message);
      }
      if (products.length > 0) {
        setSortProducts(products);
      }
    })();
  }, [fetchProducts]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleDelete = async (id) => {
    const result = await deleteProduct(id);
    if (result.success) {
      setDeletedId(null);
      alert(result.message);
    }
  };

  return (
    <>
      <div className="mt-10 px-3">
        <table className="w-full border border-gray-300 border-collapse">
          <thead>
            <tr>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Id
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Image
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Name
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Brand
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Price
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Discount
              </th>
              <th className="text-start border border-gray-300 border-collapse py-2 px-3">
                Add Date
              </th>
            </tr>
          </thead>
          <tbody>
            {sortProducts &&
              sortProducts.map((p) => (
                <tr key={p.id}>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3 w-4">
                    {p.id}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3 max-w-[80px]">
                    <div className=" group relative w-[80px] mx-auto">
                      <img
                        className="group-hover:opacity-0 transition-all duration-300"
                        src={imageUrl + p.image1}
                        alt=""
                      />
                      <img
                        className="w-full group-hover:opacity-100 opacity-0 absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-300"
                        src={imageUrl + p.image2}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    {p.name}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    ${p.price}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    {p.brand}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    {p.discount}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    {new Date(p.date).getDate()}/
                    {months[new Date(p.date).getMonth()]}/
                    {new Date(p.date).getFullYear()}
                  </td>
                  <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                    <span
                      className="text-red-500 inline-block mr-4 cursor-pointer"
                      onClick={() => setDeletedId(p.id)}
                    >
                      Delete
                    </span>
                    <Link
                      to={"/admin/update_product/" + p.id}
                      className="text-green-500 inline-block cursor-pointer"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletedId && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-10 bg-white rounded-2xl">
            <h1 className="text-2xl text-center font-semibold text-blue-400">
              Do you really want to delete this product?
            </h1>
            <div className="flex items-center justify-between gap-4 px-10 mt-14">
              <span
                className="text-red-500"
                onClick={() => handleDelete(deletedId)}
              >
                Yes
              </span>
              <span
                className="text-green-500"
                onClick={() => setDeletedId(null)}
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
