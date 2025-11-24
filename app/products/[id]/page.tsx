import Link from "next/link";

import { products } from "@/data/products";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductDetailsPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center max-w-md">
                    <div className="bg-white border border-gray-200 rounded-lg p-12">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-light text-gray-900 mb-4">
                            Produto não encontrado
                        </h1>
                        <p className="text-gray-600 mb-8">
                            O produto que você está procurando não existe ou foi removido.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-normal"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Voltar à listagem
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para produtos
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 md:h-96 object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex-1">
                                <div className="mb-6">
                                    <span className="text-gray-500 text-sm font-medium">
                                        Categoria: {product.category}
                                    </span>
                                    <h1 className="text-3xl font-light text-gray-900 mt-2 mb-4">
                                        {product.name}
                                    </h1>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl font-light text-gray-900">
                                            R$ {product.price}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-normal text-gray-900 mb-3">Descrição</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}