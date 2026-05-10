

const Banner = () => {
    return (

        <section
            class="hero min-h-[65vh] bg-gradient-to-r from-orange-50 via-white to-orange-100 overflow-hidden"
        >
            <div
                class="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-6 py-10 gap-10"
            >

                <div class="w-full lg:w-1/2">
                    <div class="carousel rounded-3xl shadow-2xl w-full h-[350px]">

                        {/* <!-- Slide 1 --> */}
                        <div id="slide1" class="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co.com/8477GVZ9/c-d-x-PDX-a-82obo-unsplash.jpg"
                                class="w-full object-cover"
                            />

                            <div class="absolute inset-0 bg-black/40"></div>

                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="uppercase text-sm tracking-widest text-orange-300">
                                    Trending Product
                                </p>
                                <h2 class="text-3xl font-bold">Head_Phone </h2>
                            </div>

                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                            >
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <div id="slide2" class="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co.com/f3vjPTg/fernando-andrade-pot-CPE-Cw8-A-unsplash.jpg"
                                class="w-full object-cover"
                            />

                            <div class="absolute inset-0 bg-black/40"></div>

                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="uppercase text-sm tracking-widest text-orange-300">
                                    Perfume Product
                                </p>
                                <h2 class="text-3xl font-bold">Modern Fragrance</h2>
                            </div>

                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                            >
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>

                        {/* <!-- Slide 3 --> */}
                        <div id="slide3" class="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co.com/rG8w66VC/eniko-kis-Ks-LPTs-Yaq-IQ-unsplash.jpg"
                                class="w-full object-cover"
                            />

                            <div class="absolute inset-0 bg-black/40"></div>

                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="uppercase text-sm tracking-widest text-orange-300">
                                    Top Launch
                                </p>
                                <h2 class="text-3xl font-bold">Digital Camera</h2>
                            </div>

                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                            >
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Left Content --> */}
                <div class="w-full lg:w-1/2">
                    <div
                        class="badge badge-warning badge-outline px-4 py-4 mb-5 animate-pulse"
                    >
                        🚀 Discover Trending Tech Products
                    </div>

                    <h1
                        class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                    >
                        Launch & Explore
                        <span class="text-orange-500 block mt-2">
                            Innovative Products
                        </span>
                    </h1>

                    <p class="py-6 text-gray-600 text-lg leading-relaxed">
                        Product Hunt helps creators launch their products and users discover
                        the newest apps, AI tools, startups, and digital experiences every
                        day.
                    </p>

                    {/* <!-- CTA Buttons --> */}
                    <div class="flex flex-wrap gap-4">
                        <button class="btn btn-warning text-white px-8">
                            Explore Products
                        </button>

                        <button class="btn btn-outline btn-warning px-8">
                            Submit Product
                        </button>
                    </div>

                    {/* <!-- Dynamic Statistics --> */}
                    <div class="grid grid-cols-3 gap-4 mt-10">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-1 transition duration-300"
                        >
                            <h2 class="text-3xl font-bold text-orange-500">12K+</h2>
                            <p class="text-sm text-gray-500 mt-1">Products</p>
                        </div>

                        <div
                            class="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-1 transition duration-300"
                        >
                            <h2 class="text-3xl font-bold text-orange-500">4.8K+</h2>
                            <p class="text-sm text-gray-500 mt-1">Makers</p>
                        </div>

                        <div
                            class="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-1 transition duration-300"
                        >
                            <h2 class="text-3xl font-bold text-orange-500">85K+</h2>
                            <p class="text-sm text-gray-500 mt-1">Visitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;