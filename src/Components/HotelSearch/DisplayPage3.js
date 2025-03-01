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
    checkIn: result.checkIn && dayjs(result.checkIn).isValid() ? dayjs(result.checkIn).format("YYYY-MM-DD") : "",
    checkOut: result.checkOut && dayjs(result.checkOut).isValid() ? dayjs(result.checkOut).format("YYYY-MM-DD") : "",
  });

  // Temporary state for form inputs
  const [tempFormData, setTempFormData] = useState({ ...formData });
  // const [guestData, setGuestData] = useState({ adults: result.adults || 1, children: result.children || 0 });
  // const [showGuestModal, setShowGuestModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8040/api/v1/MakeYourTrip")
      .then((data) => setYourTrip(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUpdate = () => {
    setFormData({ ...tempFormData }); // Apply changes on button click
  };

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
                  value={tempFormData.location}
                  onChange={(e) => setTempFormData({ ...tempFormData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label>CHECK-IN</label>
              <input
                type="date"
                value={tempFormData.checkIn}
                onChange={(e) => setTempFormData({ ...tempFormData, checkIn: e.target.value })}
              />
            </div>

            <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label>CHECK-OUT</label>
              <input
                type="date"
                value={tempFormData.checkOut}
                onChange={(e) => setTempFormData({ ...tempFormData, checkOut: e.target.value })}
              />
            </div>

            {/* <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label>GUEST & ROOMS</label>
              <input
                type="number"
                min="1"
                value={tempFormData.adults}
                onChange={(e) => setTempFormData({ ...tempFormData, adults: parseInt(e.target.value) || 1 })}
              />
            </div> */}

            {/* GUESTS (Combined Adults + Children in One Box) */}
            {/* <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label>GUESTS</label>
              <input
                type="text"
                readOnly
                value={`${tempFormData.adults} Adults, ${tempFormData.children} Children`}
                onClick={() => setTempFormData(true)}
                className="guest-input-box"
              />
            </div> */}


            {/* GUESTS (Adults + Children) */}
            {/* <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label>GUESTS</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <label>Adults</label>
                  <input
                    type="number"
                    min="1"
                    value={tempFormData.adults}
                    onChange={(e) => setTempFormData({ ...tempFormData, adults: Math.max(1, parseInt(e.target.value) || 1) })}
                  />
                </div>
                <div>
                  <label>Children</label>
                  <input
                    type="number"
                    min="0"
                    value={tempFormData.children}
                    onChange={(e) => setTempFormData({ ...tempFormData, children: Math.max(0, parseInt(e.target.value) || 0) })}
                  />
                </div>
              </div>
            </div> */}

            <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label>GUESTS</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                <input
                    type="number"
                    min="1"
                    value={tempFormData.adults}
                    onChange={(e) => setTempFormData({ ...tempFormData, adults: Math.max(1, parseInt(e.target.value) || 1) })}
                  />
                  <label>Adult</label>
                  <input
                    type="number"
                    min="0"
                    value={tempFormData.children}
                    onChange={(e) => setTempFormData({ ...tempFormData, children: Math.max(0, parseInt(e.target.value) || 0) })}
                  />
                   <input
                    type="text"
                    value='1 Room'
                  />
                </div>
              </div>
            </div>


            <button onClick={handleUpdate} className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 cYhrVX hDRTlP">
              Update Search
            </button>
          </div>
        </section>
      </div>
      {/* GUEST SELECTION MODAL */}
      {/* {showGuestModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Select Guests</h2>
            <div className="guest-selection">
              <label>Adults</label>
              <input
                type="number"
                min="1"
                value={tempFormData.adults}
                onChange={(e) => setTempFormData({ ...tempFormData, adults: Math.max(1, parseInt(e.target.value) || 1) })}
              />
            </div>
            <div className="guest-selection">
              <label>Children</label>
              <input
                type="number"
                min="0"
                value={tempFormData.children}
                onChange={(e) => setTempFormData({ ...tempFormData, children: Math.max(0, parseInt(e.target.value) || 0) })}
              />
            </div>
            <button onClick={() => setShowGuestModal(false)}>Save</button>
          </div>
        </div>
      )} */}
      <div className="result-container">
        <h1 className="result-heading">Thank You!</h1>
        <p className="result-text">Your updated booking details are as follows:</p>
        <div className="result-box">
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Adults:</strong> {formData.adults}</p>
          <p><strong>Children:</strong> {formData.children}</p>
          <p><strong>Nights:</strong> {formData.nights}</p>
          <p><strong>Days:</strong> {formData.days}</p>
          <p><strong>Check-in:</strong> {formData.checkIn}</p>
          <p><strong>Check-out:</strong> {formData.checkOut}</p>
        </div>

        <div className="result-box">
          <h2>Data from Server:</h2>
          {yourTrip.length > 0 ? (
            yourTrip.map((val, index) => (
              <Link key={index} target="_blank" to={`/article/${val.Category}/${val.ID}`}>
                <div>
                  <img src={val.Image1} className="introImg1" alt={val.Title} />
                  <div>
                    <p>{val.Title}</p>
                    <p>{val.Category} / {val.Date}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No hotels found for your selection.</p>
          )}
        </div>
        <p className="result-message">We hope you enjoy your stay in {formData.location}!</p>
      </div>
    </>
  );
}

export default DisplayPage;
