
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offerPic1 from "../../../assets/offers-pic/My project-1.png"
import offerPic2 from "../../../assets/offers-pic/My project-3.png"
import sliderpic from "../../../assets/offers-pic/sliderbg-pic.png"
import sliderpic2 from "../../../assets/offers-pic/sliderpic-2.png"
const Offers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className=" flex flex-col md:flex-row mt-10 mb-2">
            <div className="w-full md:w-1/2">
                <div className="bg-black bg-opacity-100 h-full md:py-8 py-6" style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1636955840493-f43a02bfa064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0, 0, 0, 0.5)' // Transparent background with opacity
            }}> 
              <div className="container mx-auto px-4">
                        <Slider {...settings}>
                            <div>
                                <div className="text-white flex gap-8 items-center"
                                >
                                    <div className="w-full">
                                        <img
                                            src={sliderpic}
                                            alt="Image 1"
                                            className="w-full h-full  mb-4"
                                        />
                                    </div>
                                    <div className=" md:w-1/2 w-full">
                                        <h2 className="text-sm font-bold text-[#fc4b7a] text-right">UP TO <br /> <span className="md:text-5xl text-4xl text-[#fc4b7a]">30% OFF</span>
                                        </h2>
                                        <p className="text-gray-800 mt-4 text-right">
                                            Find new and popular <br />
                                            kids toys for ages.
                                        </p>
                                        <div className="mt-6 text-right">
                                            <a
                                                href="#shop"
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold md:py-3 px-6 p rounded-md shadow-lg transition duration-300 inline-block"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-white flex gap-8 items-center"
                                >
                                    <div className=" md:w-1/2 w-full">
                                        <h2 className="text-sm font-bold text-[#fc4b7a] text-left">UP TO <br /> <span className="md:text-[46px] text-4xl text-[#fc4b7a] font-serif p-0">30% OFF</span>
                                        </h2>
                                        <p className="text-gray-800 mt-4 text-left">
                                            Find new and popular <br />
                                            kids toys for ages.
                                        </p>
                                        <div className="mt-6 text-left">
                                            <a
                                                href="#shop"
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold md:py-3 px-6 p rounded-md shadow-lg transition duration-300 inline-block"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <img
                                            src={sliderpic2}
                                            alt="Image 1"
                                            className="w-full h-full  mb-4"
                                        />
                                    </div>
                                </div>
                            </div>
                           
                            {/* Add more carousel slides as needed */}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1">
                    <div className="h-full bg-slate-300">
                        <div className="container mx-auto px-4 ">
                            <div className="text-white flex items-center justify-between md:gap-10">
                                <div className="w-2/3">
                                    <img
                                        src={offerPic1}
                                        alt="Image 2"
                                        className="w-full h-full mb-4"
                                    />
                                </div>
                                <div className="w-1/2 md:py-0 py-5">
                                    <h3 className=" mb-4 text-right text-black md:text-[20px] text-[15px]">New Arrivals <br /> <span className=" md:text-5xl text-3xl font-bold"> Girl Toys</span></h3>
                                    <div className=" text-right mt-5">
                                        <a
                                            href="#shop"
                                            className="bg-[#f5c5d1] hover:bg-[rgba(178,225,217,.8)] text-white font-bold py-3 px-4 md:py-3 md:px-6 rounded-xl transition duration-300 inline-block"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full">
                        <div className="container mx-auto px-4">
                            <div className="text-white flex items-center md:gap-10">
                                <div className="w-1/2 md:py-0">
                                    <h3 className=" mb-4 text-left text-black md:text-[20px] text-[15px]">New Arrivals<br /><span className=" md:text-[47px] text-3xl font-bold">Boys Toys</span></h3>
                                    <div className=" text-left mt-5">
                                        <a
                                            href="#shop"
                                            className="bg-[rgba(178,225,217,.8)] hover:bg-[#f5c5d1] text-white font-bold py-3 px-4 md:py-3 md:px-6 rounded-xl transition duration-300 inline-block"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <img
                                        src={offerPic2}
                                        alt="Image 2"
                                        className="w-full h-full mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Offers;

