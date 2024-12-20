import React from "react";

const EmailInput = () => {
  return (
    <section className="md:p-8 p-3 bg-cyan-500">
      <div className="max-w-[1690px] mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 text-white">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            Sign Up & Subscribe To Our Newsletter
          </h3>
          <p>
            Subscribe to our latest newsletter to get news about special
            discounts and upcoming sales
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[75%]">
            <input
              className="w-full py-2 focus:border-none px-4 rounded-lg"
              type="text"
            />
          </div>
          <button className="w-[25%] bg-white text-gray-700 py-2 rounded-lg text-center">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailInput;
