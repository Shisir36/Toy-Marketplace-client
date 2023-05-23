
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OfferTime from "../OfferTime/OfferTime";
import Offers from "../Offers/Offers";
import Provide from "../Provide/Provide";
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
                <div>
                    <Provide/>
                </div>
                <Offers />
                <div>
                    <OfferTime/>
                </div>
            </div>
    );
};

export default Home;





