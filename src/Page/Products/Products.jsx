import { useState } from "react";
import useAccepet from "../../Hook/useAccepet";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const [features] = useAccepet();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    // Pagination Logic
    const totalPages = Math.ceil(features.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = features.slice(startIndex, endIndex);

    return (
        <div className=" mx-auto px-4">

            {/* Products Grid */}
            <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {currentItems.map((items) => (
                    <ProductsCard
                        key={items._id}
                        items={items}
                    />
                ))}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">

                    {/* Prev Button */}
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-5 py-2 rounded-xl bg-black text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page + 1)}
                            className={`px-5 py-2 rounded-xl font-semibold transition ${
                                currentPage === page + 1
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            {page + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-5 py-2 rounded-xl bg-black text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>

                </div>
            )}
        </div>
    );
};

export default Products;