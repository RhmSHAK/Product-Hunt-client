import { useState } from "react";
import useAccepet from "../../Hook/useAccepet";
import ProductsCard from "./ProductsCard";
import { FaSearch } from "react-icons/fa";

const Products = () => {
    const [features] = useAccepet();

    // Search State
    const [search, setSearch] = useState("");

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    // Search Filter By Card Name
    const filteredProducts = features.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(
        filteredProducts.length / itemsPerPage
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = filteredProducts.slice(
        startIndex,
        endIndex
    );

    return (
        <div className="mx-auto px-4">

            {/* Search Bar */}
            <div className="flex justify-center mt-8">
                <div className="relative w-full md:w-1/2">

                    <input
                        type="text"
                        placeholder="Search Product Name..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-black"
                    />

                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                </div>
            </div>

            {/* Products Grid */}
            <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {currentItems.length > 0 ? (
                    currentItems.map((items) => (
                        <ProductsCard
                            key={items._id}
                            items={items}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-xl font-semibold">
                        No Product Found
                    </div>
                )}

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

                    {/* Page Number */}
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

                    {/* next button */}
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