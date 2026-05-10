import React from "react";

const HomeSections = () => {
  return (
    <div>

  

      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Choose Product Hunt?
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We help makers launch products and users discover amazing tools every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Item 1 */}
            <div className="card bg-base-100 shadow-lg p-8 text-center hover:shadow-2xl duration-300">
              <div className="text-5xl mb-5">
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Fast Launch
              </h3>

              <p className="text-gray-500">
                Publish your product instantly and reach thousands of users worldwide.
              </p>
            </div>

            {/* Item 2 */}
            <div className="card bg-base-100 shadow-lg p-8 text-center hover:shadow-2xl duration-300">
              <div className="text-5xl mb-5">
                🔥
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Trending Products
              </h3>

              <p className="text-gray-500">
                Discover innovative products curated by the community every day.
              </p>
            </div>

            {/* Item 3 */}
            <div className="card bg-base-100 shadow-lg p-8 text-center hover:shadow-2xl duration-300">
              <div className="text-5xl mb-5">
                💬
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Real Reviews
              </h3>

              <p className="text-gray-500">
                Get honest feedback and meaningful reviews from real users.
              </p>
            </div>

          </div>
        </div>
      </section>


      

      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="hero bg-gradient-to-r from-orange-50 via-white to-orange-100 rounded-3xl text-white overflow-hidden">
            <div className="hero-content text-center py-16">

              <div>
                <h1 className="text-5xl text-orange-500 font-bold">
                  Join Our Growing Community
                </h1>

                <p className="py-6 max-w-2xl text-orange-400 mx-auto text-lg">
                  Thousands of makers and users are already sharing and discovering amazing products every day.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                    <h2 className="text-4xl  text-orange-300 font-bold">
                      12K+
                    </h2>

                    <p className="mt-2 text-orange-400">
                      Products
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                    <h2 className="text-4xl  text-orange-300 font-bold">
                      4.8K+
                    </h2>

                    <p className="mt-2 text-orange-400">
                      Makers
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                    <h2 className="text-4xl  text-orange-300 font-bold">
                      25K+
                    </h2>

                    <p className="mt-2 text-orange-400">
                      Reviews
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                    <h2 className="text-4xl  text-orange-300 font-bold">
                      85K+
                    </h2>

                    <p className="mt-2 font-sm text-orange-400">
                      Users
                    </p>
                  </div>

                </div>

                <button className="btn btn-warning mt-10 text-black">
                  Get Started
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeSections;