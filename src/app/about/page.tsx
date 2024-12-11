import React from 'react'

// Install Tailwind CSS by following the official documentation:
// https://tailwindcss.com/docs/installation

// pages/about.js
export default function About() {
    return (
      <div className=" bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-teal-600 text-white p-8 flex flex-col justify-center rounded-lg">
              <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
              <p className="text-base leading-relaxed">
                At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomics, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
              </p>
              <button className="mt-6 px-4 py-2 bg-white text-teal-600 font-medium rounded shadow hover:bg-gray-100">
                View collection
              </button>
            </div>
            <div>
              <img
                src="/images/Image.png"
                alt="Comforty Chair"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Brand Differentiators Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What Makes Our Brand Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Next day as standard',
                  description: 'Order before 3pm and get your order the next day as standard.',
                  icon: '📦',
                },
                {
                  title: 'Made by true artisans',
                  description: 'Handmade crafted goods made with real passion and craftsmanship.',
                  icon: '🛠️',
                },
                {
                  title: 'Unbeatable prices',
                  description: 'For our materials and quality you won’t find better prices anywhere.',
                  icon: '💰',
                },
                {
                  title: 'Recycled packaging',
                  description: 'We use 100% recycled to ensure our footprint is more manageable.',
                  icon: '♻️',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Popular Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Popular Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'The Poplar suede sofa',
                  price: '$99.00',
                  image: '/images/Large.png',
                },
                {
                  name: 'The Dandy chair',
                  price: '$99.00',
                  image: '/images/greenchair.png',
                },
                {
                  name: 'The Dandy chair',
                  price: '$99.00',
                  image: '/images/Photo.png',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[348px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  