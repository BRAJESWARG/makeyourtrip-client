import React, { useEffect, useState } from "react";
import "./DisplayPage.css";
import "./HotelSearch.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

function DisplayPage({ result }) {
  const [yourTrip, setYourTrip] = useState([]);
  const [formData, setFormData] = useState({
    ...result,
    checkIn: result.checkIn ? dayjs(result.checkIn).format("YYYY-MM-DD") : "",
    checkOut: result.checkOut ? dayjs(result.checkOut).format("YYYY-MM-DD") : "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8040/api/v1/MakeYourTrip")
      .then((data) => setYourTrip(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUpdate = () => {
    setFormData({ ...formData });
  };

  const { adults, children, location, nights, days, checkIn, checkOut } = formData;

  if (adults < 1) {
    return <h1>At least one Adult needs to be selected...</h1>;
  }

  const filteredData = yourTrip.filter(
    (value) => value.Adults === adults && value.Child === children && value.Category === "Hotels"
  );

  return (
    <>
      <div className="displayHotelsContainer">
        <section className="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
          <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
            <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
              <div className="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                <label htmlFor="location">AREA, LANDMARK OR PROPERTY NAME</label>
                <input
                  id="location"
                  placeholder="LOCATION NAME"
                  className="SearchWidgetAutosuggeststyles__SearchInputStyles-sc-1lizu4w-1 cGELZI"
                  value={location}
                  onClick={() => setFormData({ ...formData, location: prompt("Enter location:", location) })}
                />
              </div>
            </div>

            <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label>CHECK-IN</label>
              <input
                type="text"
                placeholder="Travel Dates"
                value={checkIn}
                onClick={() => {
                  const newCheckIn = prompt("Enter Check-in date (YYYY-MM-DD):", checkIn);
                  if (newCheckIn) {
                    setFormData({ ...formData, checkIn: dayjs(newCheckIn).format("YYYY-MM-DD") });
                  }
                }}
              />
            </div>

            <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label>CHECK-OUT</label>
              <input
                type="text"
                placeholder="Travel Dates"
                value={checkOut}
                onClick={() => {
                  const newCheckOut = prompt("Enter Check-out date (YYYY-MM-DD):", checkOut);
                  if (newCheckOut) {
                    setFormData({ ...formData, checkOut: dayjs(newCheckOut).format("YYYY-MM-DD") });
                  }
                }}
              />
            </div>

            <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label>GUEST & ROOMS</label>
              <input
                type="text"
                value={`${adults} Adults . 1 Room`}
                onClick={() => setFormData({ ...formData, adults: parseInt(prompt("Enter number of adults:", adults)) })}
              />
            </div>

            <button onClick={handleUpdate} className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 cYhrVX hDRTlP">
              Update Search
            </button>
          </div>
        </section>
      </div>

      <div className="result-container">
        <h1 className="result-heading">Thank You!</h1>
        <p className="result-text">Your updated booking details are as follows:</p>
        <div className="result-box">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Adults:</strong> {adults}</p>
          <p><strong>Children:</strong> {children}</p>
          <p><strong>Nights:</strong> {nights}</p>
          <p><strong>Days:</strong> {days}</p>
          <p><strong>Check-in:</strong> {checkIn}</p>
          <p><strong>Check-out:</strong> {checkOut}</p>
        </div>

        <div className="result-box">
          <h2>Data from Server:</h2>
          {filteredData.length > 0 ? (
            filteredData.map((val, index) => (
              <Link key={index} target="_blank" to={`/article/${val.Category}/${val.ID}`}>
                <div>
                  <img src={val.Image1} className="introImg1" alt={val.Title} />
                  <div>
                    <p>{val.Title}</p>
                    <p>
                      {val.Category} / {val.Date}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No hotels found for your selection.</p>
          )}
        </div>
        <p className="result-message">We hope you enjoy your stay in {location}!</p>
      </div>
    </>
  );
}

export default DisplayPage;
