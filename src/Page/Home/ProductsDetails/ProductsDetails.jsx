import { FaFlag, FaStar, FaGlobe, FaCommentDots } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";
import Swal from "sweetalert2";
import ReviewSection from "./ReviewSection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Proviter/AuthProviders";

const ProductsDetails = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);

  const {
    name,
    image,
    description,
    _id,
    report_status,
    Owner_name,
    Owner_image,
    Owner_email,
    links,
    tag,
    product_status,
  } = items;

  const axiosPublic = UseAxiosPublic();

  // Check if user already reviewed this product
  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/review/check?email=${user.email}&productId=${_id}`)
        .then((res) => {
          if (res.data?.alreadyReviewed) {
            setAlreadyReviewed(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user, _id, axiosPublic]);

  // Report
  const handleReport = (item) => {
    axiosPublic.patch(`/featured/report/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} Reported Successfully!`,
          showConfirmButton: false,
          timer: 1800,
        });
      }

      window.location.reload();
    });
  };

  // Review
  const handleReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const rating = Number(form.rating.value);

    // Rating validation
    if (rating > 5) {
      return Swal.fire({
        icon: "error",
        title: "Rating can't be more than 5 ⭐",
      });
    }

    const reviewInfo = {
      name: form.name.value,
      image: form.image.value,
      description: form.description.value,
      rating: rating,
      productId: _id,
      reviewerEmail: user?.email,
    };

    axiosPublic
      .post("/review", reviewInfo)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();

          Swal.fire({
            title: "Successful",
            text: "Review Post Successful",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Disable button permanently for this user/product
          setAlreadyReviewed(true);

          // Hide form after submit
          setShowReviewForm(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Product Details Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-6 md:p-10">

        {/* Product Image */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">

          <div>

            {/* Tag + Status */}
            <div className="flex items-center gap-3 mb-4">

              <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                {tag}
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                {product_status}
              </span>

            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-5">
              {name}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {description}
            </p>

            {/* Owner Info */}
            <div className="bg-gray-100 rounded-2xl p-4 space-y-3">

              <div className="flex items-center gap-3">

                <img
                  src={Owner_image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover border"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    Owner Info
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {Owner_name}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {Owner_email}
                  </p>
                </div>

              </div>

              {/* Product Link */}
              {/* <div className="flex items-center gap-2 text-gray-600">

                <FaGlobe />

                <a
                  href={links}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 break-all"
                >
                  Visit Product
                </a>

              </div> */}

            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Report Button */}
            <button
              onClick={() => handleReport(items)}
              disabled={report_status === "Report"}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition disabled:bg-gray-400"
            >
              <FaFlag />
              Report
            </button>

            {/* Review Button */}
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              disabled={alreadyReviewed}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <FaCommentDots />

              {alreadyReviewed
                ? "Already Reviewed"
                : showReviewForm
                ? "Hide Review Form"
                : "Post Review"}
            </button>

          </div>

        </div>
      </div>

      {/* Review Section */}
      <ReviewSection />

      {/* Review Form */}
      {showReviewForm && !alreadyReviewed && (
        <>
          <SectionTitle heading={"Post Review Section"} />

          <div className="bg-white shadow-xl rounded-3xl mt-10 p-6 md:p-10">

            <form onSubmit={handleReview} className="space-y-6">

              {/* Name */}
              <div>

                <label className="font-semibold mb-2 block">
                  Reviewer Name
                </label>

                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ""}
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white"
                  required
                />

              </div>

              {/* Image */}
              <div>

                <label className="font-semibold mb-2 block">
                  Reviewer Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  defaultValue={user?.photoURL || ""}
                  placeholder="Image URL"
                  className="input input-bordered w-full bg-white"
                  required
                />

              </div>

              {/* Description */}
              <div>

                <label className="font-semibold mb-2 block">
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Write your review..."
                  className="textarea textarea-bordered w-full h-32 bg-white"
                ></textarea>

              </div>

              {/* Rating */}
              <div>

                <label className="font-semibold mb-2 flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  Rating (Max 5)
                </label>

                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  placeholder="Give Rating"
                  className="input input-bordered w-full bg-white"
                  required
                />

              </div>

              {/* Submit */}
              <button className="btn bg-black hover:bg-gray-800 text-white border-none w-full rounded-xl">
                Submit Review
              </button>

            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsDetails;