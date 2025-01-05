import React, { useEffect, useState } from "react";
import "./HotelSearch.css"; // Use the same CSS file for styling
import axios from "axios";
import { Link } from "react-router-dom";

function ResultPage({ result }) {

  const [yourTrip, setYourTrip] = useState([]);
  const [adults, setAdults] = useState(result.adults);
  let adultsCount = (result.adults);
  let childrenCount = (result.children);

  useEffect(() => {

    // axios.get(`https://fathomless-wildwood-68036.herokuapp.com/api/v1/TheSiren`).then(
    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
      data => setYourTrip(data.data)
    )

  }, [])

  return (
    <div className="result-container">
      <h1 className="result-heading">Thank You!</h1>
      <p className="result-text">Your booking details are as follows:</p>
      <div className="result-box">
        <p><strong>Location:</strong> {result.location}</p>
        <p><strong>Adults:</strong> {adultsCount} </p>
        <p><strong>Children:</strong> {childrenCount}</p>
        <p><strong>Nights:</strong> {result.nights}</p>
        <p><strong>Days:</strong> {result.days}</p>
      </div>
      <div className="result-box">
        <h2>Data from Server:</h2>
        {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 2) && (value.Category === "Hotels")).map((val, index) => (
          
          <div key={index} >

            <img src={val.Image} className='introImg1' alt="" />
            <div className=''>
              <p className=''>{val.Title}</p>
              <p className=''>{val.Category} / {val.Date}</p>
            </div>
          </div>

        ))
        }

       
      </div>
      <p className="result-message">We hope you enjoy your stay in {result.location}!</p>
    </div>
  );
}

export default ResultPage;
