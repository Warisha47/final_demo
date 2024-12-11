
import Image from 'next/image';


export default function Product() {
  const products = [
    { id: 1, name: 'Luxury Stool Chair', price: '$20', tag: 'New', image: '/images/Image.png' },
    { id: 2, name: 'Luxury Stool Chair', price: '$20', tag: 'Hot', image: '/images/Image1.png' },
    { id: 3, name: 'Luxury Stool Chair', price: '$20', image: '/images/Image2.png' },
    { id: 4, name: 'Luxury Stool Chair', price: '$20', image: '/images/Image3.png' },
    { id: 5, name: 'Luxury Stool Chair', price: '$20', image: '/images/stool.png' },
    { id: 6, name: 'Luxury Stool Chair', price: '$20', image: '/images/graychair.png' },
    { id: 7, name: 'Luxury Stool Chair', price: '$20', tag: 'Free', image: '/images/blchair.png' },
    { id: 8, name: 'Luxury Stool Chair', price: '$20', tag: 'Sale', image: '/images/Image.png' },
    { id: 9, name: 'Luxury Stool Chair', price: '$20', image: '/images/phone chair.png' },
    { id: 10, name: 'Luxury Stool Chair', price: '$20', image: '/images/Image1.png' },
    { id: 11, name: 'Luxury Stool Chair', price: '$20', image: '/images/Image2.png' },
    { id: 12, name: 'Luxury Stool Chair', price: '$20', image: '/images/whitechair.png' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 my-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
              <Image
              width={500}
              height={500}
                src={product.image}
                alt={product.name}
                className="w-full h-53 object-cover"  
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600">{product.price}</p>
                {product.tag && (
                  <span className="mt-2 inline-block px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded">
                    {product.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Or Subscribe To The Newsletter
          </h2>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Instagram Section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
                <Image
                width={500}
                height={500}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-58 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


  

