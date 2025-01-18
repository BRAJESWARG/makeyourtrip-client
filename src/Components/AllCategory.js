import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { ArrayofyourTrip } from './ArrayOfBlog/ArrayOfBlog';
import axios from 'axios';
import HotelSearch from './HotelSearch/HotelSearch';

const AllCategory = () => {

    // const [yourTrip] = useContext(ArrayofyourTrip)

    const { cat } = useParams()

    const [yourTrip, setYourTrip] = useState([]);
    console.log(yourTrip);
    
    useEffect(() => {
        
        axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(

            data => setYourTrip(data.data)
        )

    }, [cat])

    function RenderSearchComponent() {
        if (cat === "Hotels") return <HotelSearch />;
        // if (cat === "Flights") return <FlightSearch />;
        // if (cat === "Trains") return <TrainSearch />;
        // return <BusSearch />;
        return "Oops! Yet to Development!"
    };
    return (

        <div className='blogBody'>
            <div>
                <p className='mainCategory'>{cat}</p>
                <hr className='mainCategoryHr' />


                <RenderSearchComponent />

            </div>
        </div>
    );

}

export default AllCategory;
