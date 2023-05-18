import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToyGallery from "../ToyGallery/ToyGallery";


const Home = () => {
    return (
        <div className="mt-10">
            <Banner/>
            <div>
           <ToyGallery/>
           </div>
           <div>
            <ShopByCategory/>
           </div>
        </div>
    );
};

export default Home;