import { useContext } from "react";
import { FaUserCircle, FaTag, FaBox, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../Proviter/AuthProviders";
import { Link } from "react-router-dom";

const ProductsCard = ({ items }) => {
    const {
        _id,
        name,
        image,
        Owner_email,
        Owner_name,
        tag,
        description,
    } = items;

    const { user } = useContext(AuthContext);

    return (
        <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[2px] shadow-xl transition hover:scale-105">

            <div className="relative h-full rounded-3xl bg-white">

                {/* Image */}
                <figure className="overflow-hidden rounded-t-3xl">
                    <img
                        src={image}
                        alt={name}
                        className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                </figure>

                {/* Content */}
                <div className="p-5 space-y-3">

                    <div className="flex items-center gap-2">
                        <FaBox className="text-blue-600" />
                        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaTag className="text-purple-600" />
                        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600">{description}</p>

                    <div className="flex items-center gap-2 text-gray-700">
                        <FaUserCircle className="text-blue-500" />
                        <span className="font-semibold">Owner:</span>
                        <span>{Owner_name}</span>
                    </div>

                    {/* Details Button */}
                    <div className="px-6 pb-4">
                        <Link to={`/details/${_id}`}>
                            <button className="w-full flex items-center justify-center gap-2 bg-sky-300 text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                View Details
                                <FaArrowRight className="text-sm" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsCard;