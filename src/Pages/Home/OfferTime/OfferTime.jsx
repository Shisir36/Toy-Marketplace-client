import React from 'react';
import backgroundImage from "../../../assets/OfferTime/7xm.xyz109763.jpg";
import FlipCountdown from '@rumess/react-flip-countdown';

const OfferTime = () => {
    const endDate = new Date("2023-06-01T00:00:00Z"); // Replace with your desired end date
    const currentDate = new Date();

    return (
        <section className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="text-center">
                <h1 className="text-white font-bold text-2xl md:text-3xl bg-clip-text text-transparent ">
                    Special Offer!
                </h1>
                <h2 className='md:text-6xl text-4xl text-center mt-3 gFont text-white'>Save Up to <span className=' font-bold text-rose-300'> 50%</span></h2>
                <div className="text-4xl font-bold bg-gradient-to-br from-transparent to-transparent md:px-10 md:py-10 py-3">
                    <p className=' text-[#ffffffd2]'>Offer will end in:</p>
                    <div className="flip-countdown">
                        <FlipCountdown
                            endAt={endDate}
                            now={currentDate}
                            hideYear
                            hideMonth
                            theme="light"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferTime;



