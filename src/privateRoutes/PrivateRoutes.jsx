import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
// import { ColorRing } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { currentUser, loading} = useContext(Authcontext)
    const location = useLocation();
    // console.log('user in private route',user);
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <div className='mx-auto text-center h-screen flex items-center justify-center'>
      <div>
       {/* <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      /> */}
      </div>
        </div>

    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace = {true}></Navigate>
};

export default PrivateRoute;