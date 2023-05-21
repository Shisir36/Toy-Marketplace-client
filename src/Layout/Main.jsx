import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { RotatingTriangles } from "react-loader-spinner";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";


const Main = () => {
    const {loading} = useContext(Authcontext)
    return (
        <div>
           {
    loading ? (
        <div className="flex items-center justify-center h-screen">
            <RotatingTriangles
                visible={true}
                height="120"
                width="120"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
            />
        </div>
    ) : ( <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
        
          )
}
        </div>
    );
};

export default Main;



