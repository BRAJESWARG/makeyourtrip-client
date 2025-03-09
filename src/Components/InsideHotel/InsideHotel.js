import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InsideSearchView from "./InsideSearchView";
import InsideMainView from "./InsideMainView";


const InsideHotel = () => {

    return (
        <>
            <div className='InsideHotelSearchView'>
                <InsideSearchView />
            </div>
            <div className='InsideHotelMainView'>
                <InsideMainView />
            </div>
        </>
    );
}

export default InsideHotel;