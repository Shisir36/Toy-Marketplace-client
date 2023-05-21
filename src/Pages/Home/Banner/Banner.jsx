import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerImage1 from "../../../assets/banner-images/banner-image-4.png";
import bannerImage2 from "../../../assets/banner-images/banner-image-2.png";
import bannerImage3 from "../../../assets/banner-images/banner-img-3.png";

const Banner = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

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
                        <h2
                            className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2 "
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Welcome to Toy Galaxy
                        </h2>
                        <h3
                            className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Special Edition
                        </h3>
                        <p
                            className="md:mb-4 mb-2 md:block hidden text-[#787878]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            Explore our new collection of innovative and exciting toys. From interactive animal's toys, we have the perfect toys to spark your child's curiosity and imagination. Let their creativity soar with Toy Galaxy!
                        </p>
                        <button
                            className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
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
                <div className="mr-10 w-full">
                        <img
                            src={bannerImage2}
                            className="w-full md:w-auto md:h-full h-[250px]"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="md:p-8">
                        <h2
                            className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Welcome to Toy Galaxy
                        </h2>
                        <h3
                            className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Special Toys
                        </h3>
                        <p
                            className="text-[#787878] md:mb-4 mb-2 md:block hidden"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at lectus massa. Fusce varius justo et ante rhoncus aliquet.
                        </p>
                        <button
                            className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
                            Buy Now
                        </button>
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
                        <h2
                            className="text-white text-xl rounded-md bg-[#FF6799] md:p-2 md:w-1/2 text-center font-bold md:mb-4 mb-2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Welcome to Toy Galaxy
                        </h2>
                        <h3
                            className="md:text-6xl text-2xl md:mb-4 mb-2 font-bold"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Enjoy Your Playtime
                        </h3>
                        <p
                            className="text-[#787878] md:mb-4 mb-2 md:block hidden"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            Toys scattered about, a joyful sight to see,
                            Imagination soars, setting imaginations free,
                            Enjoy your playtime, let your dreams run wild and glee.
                        </p>
                        <button
                            className="px-6 py-1 bg-[#4acdd5] rounded-lg text-white"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
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
