import Link from "next/link";

import { products } from "@/data/products";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-light text-gray-900 text-center mb-4">
                        Nossos Produtos
                    </h1>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto">
                        Descubra os melhores periféricos para sua setup
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group"
                        >
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-all duration-300 hover:border-gray-300">

                                <div className="relative overflow-hidden bg-white">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 md:h-56 object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className="text-sm text-gray-500 font-medium mb-2 block">
                                                {product.category}
                                            </span>
                                            <h3 className="text-xl font-normal text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <span className="text-2xl font-light text-gray-900">
                                            R$ {product.price}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-gray-900 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                            Ver detalhes
                                        </span>

                                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
