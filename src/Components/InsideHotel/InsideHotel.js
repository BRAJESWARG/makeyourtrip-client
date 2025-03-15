import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InsideSearchView from "./InsideSearchView";
import InsideMainView from "./InsideMainView";
import InsideNav from "./InsideNav";
import Amenities from "./Amenities";
import Host from "./Host";
import PropertyPolicies from "./PropertyPolicies";
import GuestReviews from "./GuestReviews";
import StayOptions from "./StayOptions";


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
            <div className='InsideHotelStayOptions'>
                <StayOptions />
            </div>
            <div className='InsideHotelAmenities'>
                <Amenities />
            </div>
            <div className='InsideHotelHost'>
                <Host />
            </div>
            <div className='InsideHotelGuestReviews'>
                <GuestReviews />
            </div>
            <div className='InsideHotelPropertyPolicies'>
                <PropertyPolicies />
            </div>
        </>
    );
}

export default InsideHotel;