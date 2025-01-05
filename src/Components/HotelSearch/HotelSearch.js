import React, { useEffect, useState } from "react";
import "./HotelSearch.css"; // Import the external CSS file
import ResultPage from "./ResultPage"; // Import the result page component

function HotelSearch() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1); // Default 1 adult
  const [children, setChildren] = useState(0); // Default 0 children
  const [location, setLocation] = useState(""); // City/Location input
  const [nightStatus, setNightStatus] = useState({ nights: 0, days: 0 });

  const [result, setResult] = useState(null); // Result object to pass to ResultPage
  const [showResultPage, setShowResultPage] = useState(false); // State to toggle between pages

  // Function to get the day of the week from a date
  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return dateString ? days[date.getDay()] : "";
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate > checkInDate) {
        const timeDifference = checkOutDate - checkInDate;
        const days = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const nights = days - 1; // Subtract 1 day for the last day not being a night

        setNightStatus({ nights, days });
      } else {
        setNightStatus({ nights: 0, days: 0 }); // Reset result if invalid dates are selected
        alert("Check-out date must be after check-in date.");
      }
    } else {
      setNightStatus({ nights: 0, days: 0 }); // Reset result if dates are cleared
    }
  }, [checkIn, checkOut]); // Recalculate when checkIn or checkOut changes

  const handleSearch = () => {
    if (checkIn && checkOut && location.trim()) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate > checkInDate) {
        const timeDifference = checkOutDate - checkInDate;
        const days = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const nights = days - 1; // Subtract 1 day for the last day not being a night

        setResult({
          location,
          adults,
          children,
          nights,
          days,
        });
        setShowResultPage(true); // Navigate to the result page
      } else {
        alert("Check-out date must be after check-in date.");
      }
    } else {
      alert("Please fill out all fields (Check-in, Check-out, and Location).");
    }
  };

  if (showResultPage && result) {
    // Navigate to the ResultPage and pass the result as props
    return <ResultPage result={result} />;
  }

  return (
    <div className="container">
      <h1 className="heading">Plan Your Stay</h1>
      <div className="input-group">
        <label className="label">
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or location"
            className="input"
          />
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          Check-in Date:
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input"
          />
        </label>
        {checkIn && (
          <p className="day-text">
            <strong>{getDayOfWeek(checkIn)}</strong>
          </p>
        )}
      </div>
      <div className="input-group">
        <label className="label">
          Check-out Date:
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input"
          />
        </label>
        {checkOut && (
          <p className="day-text">
            <strong>{getDayOfWeek(checkOut)}</strong>
            <br/>
            <div>
              Nights: {nightStatus.nights}
              <br/>
              Days: {nightStatus.days}
            </div>
          </p>

        )}
      </div>
      <div className="input-group">
        <label className="label">
          Adults:
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="input"
            min="1"
          />
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          Children:
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="input"
            min="0"
          />
        </label>
      </div>
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default HotelSearch;
