import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InsideSearchView from "./InsideSearchView";
import InsideMainView from "./InsideMainView";
import InsideNav from "./InsideNav";


const InsideHotel = () => {

    return (
        <>
            <div className='InsideHotelSearchView'>
                <InsideSearchView />
            </div>
            <div className='InsideHotelMainView'>
                <InsideMainView />
            </div>
            <div className='InsideHotelNav'>
                <InsideNav />
            </div>
        </>
    );
}

export default InsideHotel;