import bannerImage1 from "../../../assets/banner-images/banner-image-4.png"
import bannerImage2 from "../../../assets/banner-images/banner-image-2.png"
import bannerImage3 from "../../../assets/banner-images/banner-img-3.png"
import { useState } from "react";
const Banner = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="carousel w-full bg-rose-50 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div id="slide1" className="carousel-item relative w-full">
                <div className="grid grid-cols-2 items-center h-full md:p-10 py-16 md:py-0">
                    <div className="w-full">
                        <img
                            src={bannerImage1}
                            className="w-full md:w-auto md:h-full h-[250px]"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="md:p-8 md:mr-0 mr-2">
                        <h2 className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2 gFont">
                            Welcome to Toy Galaxy
                        </h2>
                        <h3 className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold gFont">
                            Special Edition
                        </h3>
                        <p className="md:mb-4 mb-2 md:block hidden text-[#787878]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
                            lectus massa. Fusce varius justo et ante rhoncus aliquet.
                        </p>
                        <button className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="md:block hidden">
                    <div className={`absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        <a href="#slide3" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❯
                        </a>
                    </div>
                </div>
                <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center mb-5">
                    <a href="#slide3" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❮</a>
                    <a href="#slide2" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="grid grid-cols-2 items-center h-full md:p-10">
                    <div className="md:p-8">
                        <h2 className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2">
                            Welcome to Toy Galaxy
                        </h2>
                        <h3 className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold">
                            Special Toys
                        </h3>
                        <p className="text-[#787878] md:mb-4 mb-2 md:block hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
                            lectus massa. Fusce varius justo et ante rhoncus aliquet.
                        </p>
                        <button className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white">
                            Buy Now
                        </button>
                    </div>
                    <div className="mr-10 w-full">
                        <img
                            src={bannerImage2}
                            className="w-full md:w-auto md:h-full h-[250px]"
                            alt="Slide 2"
                        />
                    </div>
                </div>
                <div className="md:block hidden">
                    <div className={`absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        <a href="#slide1" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❯
                        </a>
                    </div>
                </div>
                <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center mb-5">
                    <a href="#slide1" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❮</a>
                    <a href="#slide3" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="grid grid-cols-2 items-center h-full md:p-10">
                    <div className="mr-10 w-full">
                        <img
                            src={bannerImage3}
                            className="w-full md:w-auto md:h-full h-[250px]"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="md:p-8">
                        <h2 className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2">
                            Welcome to Toy Galaxy
                        </h2>
                        <h3 className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold">
                            Special Toys
                        </h3>
                        <p className="text-[#787878] md:mb-4 mb-2 md:block hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
                            lectus massa. Fusce varius justo et ante rhoncus aliquet.
                        </p>
                        <button className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="md:block hidden">
                    <div className={`absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        <a href="#slide2" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle border-0 bg-[#4acdd5]">
                            ❯
                        </a>
                    </div>
                </div>
                <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center mb-5">
                    <a href="#slide2" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❮</a>
                    <a href="#slide1" className="btn btn-sm btn-circle border-0 bg-[#4acdd5] mx-1">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;