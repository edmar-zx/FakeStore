import React from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function ProductList() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });

  const products: Product[] = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Lista de Produtos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border rounded-2xl p-8 bg-gray-100">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold text-xl">R$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
