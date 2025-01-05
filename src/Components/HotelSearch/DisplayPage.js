import React, { useEffect, useState } from "react";
import "./HotelSearch.css"; // Use the same CSS file for styling
import axios from "axios";

function DisplayPage({ result }) {

  const [yourTrip, setYourTrip] = useState([]);
  // const [adults, setAdults] = useState(result.adults);
  let adultsCount = (result.adults);
  let childrenCount = (result.children);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
      data => setYourTrip(data.data)
    )

  }, [])

  const DisplayHotels = () => {
    if (adultsCount == 1 && childrenCount == 0) {

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
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 0) && (value.Category === "Hotels")).map((val, index) => (

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
          <p className="result-message">We hope you enjoy your stay in Hotel!</p>
        </div>
      )

    } else if (adultsCount == 1 && childrenCount == 1) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>Location:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 1) && (value.Category === "Hotels")).map((val, index) => (

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
          <p className="result-message">We hope you enjoy your stay in Hotel!</p>
        </div>
      )

    } else if (adultsCount == 1 && childrenCount == 2) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>Location:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 2) && (value.Category === "Hotels")).map((val, index) => (

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
          <p className="result-message">We hope you enjoy your stay in Hotel!</p>
        </div>
      )

    } else if (adultsCount == 2 && childrenCount == 0) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>Location:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 0) && (value.Category === "Hotels")).map((val, index) => (

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
          <p className="result-message">We hope you enjoy your stay in Hotel!</p>
        </div>
      )

    } else if (adultsCount == 2 && childrenCount == 1) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>Location:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 1) && (value.Category === "Hotels")).map((val, index) => (

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
      )

    } else if (adultsCount == 2 && childrenCount == 2) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>Location:</strong> { }</p>
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
          <p className="result-message">We hope you enjoy your stay in Hotel!</p>
        </div>
      )

    }

    else {
      return (
        <h1>At least one Adult need to select...</h1>
      )
    }
  }

  return (


    <DisplayHotels />


  );
}

export default DisplayPage;
