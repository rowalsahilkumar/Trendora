import React from "react";

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-7 flex justify-center items-center">
      <div className="max-w-7xl w-full px-8 text-center">
        {/* Header */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
          About <span className="text-blue-600">Trendora</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          Welcome to <span className="font-semibold">Trendora</span> – your ultimate destination for quality shopping. 
          We bring you the latest trends in fashion, cutting-edge electronics, and everyday essentials, 
          all at unbeatable prices. Our mission is to revolutionize online shopping with seamless experiences, 
          fast deliveries, and unparalleled customer satisfaction.
        </p>

        {/* Key Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Unmatched Variety</h2>
            <p className="text-gray-600">
              From fashion to tech, Trendora offers thousands of products to fit your needs and lifestyle.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fast & Reliable Shipping</h2>
            <p className="text-gray-600">
              With our trusted partners, we ensure speedy and secure deliveries straight to your doorstep.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">24/7 Customer Support</h2>
            <p className="text-gray-600">
              We prioritize your shopping experience with round-the-clock assistance for all queries.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-600 text-white py-20 px-8 rounded-xl shadow-xl max-w-5xl mx-auto mt-24">
          <h2 className="text-4xl font-bold mb-8">Why Shop With Trendora?</h2>
          <p className="text-lg leading-relaxed">
            We are more than just an online store. <strong>Trendora is a commitment to quality, affordability, 
            and an exceptional shopping experience.</strong> Whether you're looking for high-end fashion, 
            the latest electronics, or everyday necessities, we ensure top-notch quality and service.
          </p>
        </div>
      </div>
    </section>
  );
}
