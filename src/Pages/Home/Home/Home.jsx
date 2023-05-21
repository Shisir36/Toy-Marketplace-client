
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToyGallery from "../ToyGallery/ToyGallery";

const Home = () => {
    return (   
             <div>
                <Banner />
                <div>
                    <ToyGallery />
                </div>
                <div>
                    <ShopByCategory />
                </div>
                <div>
                    <AboutUs />
                </div>
                <Offers />
            </div>
    );
};

export default Home;





