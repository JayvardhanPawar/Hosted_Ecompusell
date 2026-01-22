import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../commonComponents/Navbar';
import Footer from '../commonComponents/Footer';

const OpenRoute = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 left-0 right-0 z-50'>
                <Navbar />
            </div>
            <div className='-mt-[102px]'>
                <Outlet /> {/* Render child routes here */}
            </div>
            <Footer />
        </div>
    );
};

export default OpenRoute;
