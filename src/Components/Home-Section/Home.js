import React, { useEffect, useState } from 'react';
import Intro from "./Intro/Intro"
import axios from 'axios';
import '../../App.css';
import MultiCarousel from './MultiCarousel';
import MultiCard from './MultiCard';
import Testimonials from './Testimonials';

function Home() {

    const [yourTrip, setYourTrip] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
            data => setYourTrip(data.data)
        )

    }, [])

    return (

        <div>
            <MultiCard />
            <Testimonials />
            <MultiCarousel />
            <Intro yourTrip={yourTrip} />
        </div>

    );
};

export default Home;
