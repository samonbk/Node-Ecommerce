import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProductStore } from "../../assets/Data/product";
import imageUrl from "../../assets/Data/url";
import { ProductSlide } from "../Pages/Home/Slide";

const Product = () => {
  const { name } = useParams();
  const [selectProduct, setSelectProduct] = useState({});
  const { products, fetchProducts } = useProductStore();
  const [viewImage, setViewImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const path = useLocation().pathname;

  useEffect(() => {
    const fetchData = async () => {
      setViewImage(null);
      const result = await fetchProducts();
      if (result.success) {
        const findProduct = products.find((item) => item.name == name);
        if (findProduct) {
          setSelectProduct(findProduct);
          setViewImage(findProduct.image1);
        }
      }
    };
    fetchData();
  }, [path]);

  const onChangeImage = (image) => {
    setViewImage(image);
  };

  function newPrice(price, discount) {
    let newPrice = price - (price * discount) / 100;
    return newPrice;
  }

  return (
    <>
      <div className="w-full px-3 py-4 bg-cyan-100/50">
        <h2 className="max-w-[1690px] mx-auto text-xl font-medium text-gray-500 md:px-6 px-3">
          <Link to={"/"}>Home </Link>/ {name && name}
        </h2>
      </div>
      <div className="max-w-[1690px] mx-auto text-xl md:px-6 px-3 grid md:grid-cols-12 grid-cols-1 gap-4 md:mt-16 mt-8 min-h-[40vh]">
        <div className="md:col-span-2 gap-6 flex md:flex-col flex-row">
          <div className="md:w-[100px] md:h-[100px] h-[80px] w-[80px] rounded-xl border border-gray-400 p-3 cursor-pointer relative z-20">
            <div
              className="w-full h-full overflow-hidden bg-cover bg-center"
              onClick={() => onChangeImage(selectProduct.image1)}
              style={{
                backgroundImage: `url(${imageUrl + selectProduct.image1})`,
              }}
            ></div>
          </div>
          <div className="md:w-[100px] md:h-[100px] h-[80px] w-[80px] rounded-xl border border-gray-400 p-3 cursor-pointer relative z-20">
            <div
              className="w-full h-full overflow-hidden bg-cover bg-center"
              onClick={() => onChangeImage(selectProduct.image2)}
              style={{
                backgroundImage: `url(${imageUrl + selectProduct.image2})`,
              }}
            ></div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="max-w-[500px] p-3 mx-auto">
            <img src={imageUrl + viewImage} alt="" />
          </div>
        </div>
        <div className="md:col-span-4 text-gray-500 space-y-4">
          <div className="border-b border-gray-400 space-y-4 pb-4">
            <h2 className="text-2xl text-gray-700 font-medium">
              {selectProduct.name}
            </h2>
            <p className="text-base px-3 py-1 bg-red-500 text-white rounded-2xl w-28 text-center">
              {selectProduct.discount ? selectProduct.discount : ""}% OFF
            </p>
            <p className="text-cyan-500 text-2xl font-semibold">
              <span className="text-gray-500 font-bold line-through pr-4">
                ${selectProduct.price}
              </span>
              <span className="text-cyan-500 font-bold pr-4">
                ${newPrice(selectProduct.price, selectProduct.discount)}
              </span>
            </p>
            <p className="text-base">
              About this item You can enjoy unlimited entertainment at the
              comfort of your home with this smart TV. The PurColour technology
              of this TV delivers vibrant and lifelike picture quality...
            </p>
          </div>
          <div className="md:max-w-[400px]">
            <p className="font-semibold text-gray-700 text-sm mb-2">Quantity</p>
            <div className="flex gap-3 items-center">
              <div className="flex gap-3 border border-gray-400 rounded-md max-w-[150px] justify-between">
                <div
                  className="w-10 h-10 rounded-md flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  <div className="w-2 h-0.5 bg-gray-500"></div>
                </div>
                <div className="w-10 h-10 rounded-md flex justify-center items-center">
                  {quantity}
                </div>
                <div
                  className="w-10 h-10 rounded-md flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    quantity < 10 && setQuantity(quantity + 1);
                  }}
                >
                  +
                </div>
              </div>
              <div className="text-base h-10 rounded-md justify-center flex items-center bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer w-full transition-all duration-300">
                ADD TO CART
              </div>
            </div>
            <div className="text-base w-full rounded-md bg-gray-800 hover:bg-cyan-500 text-white mt-4 h-10 flex items-center justify-center cursor-pointer transition-all duration-300">
              But it now
            </div>
          </div>
        </div>
      </div>
      <section className="relative z-0">
        <div className="max-w-[1690px] mx-auto lg:space-y-6 space-y-3 lg:p-8 p-3">
          <div className="flex items-center justify-between border-b">
            <h2 className="text-xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
              You May Also Like
            </h2>
          </div>
          <ProductSlide product={products} />
        </div>
      </section>
    </>
  );
};

export default Product;
