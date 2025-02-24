import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "./HotelView.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HotelView.css";
import "react-image-gallery/styles/css/image-gallery.css";

const HotelView = () => {

  const images = [
    { original: "https://picsum.photos/id/237/600/300", thumbnail: "https://picsum.photos/id/237/100/50", ID: 1 },
    { original: "https://picsum.photos/id/1/600/300", thumbnail: "https://picsum.photos/id/1/100/50", ID: 2 },
    { original: "https://picsum.photos/id/10/600/300", thumbnail: "https://picsum.photos/id/10/100/50", ID: 3 },
    { original: "https://picsum.photos/id/100/600/300", thumbnail: "https://picsum.photos/id/100/100/50", ID: 4 },
    { original: "https://picsum.photos/id/101/600/300", thumbnail: "https://picsum.photos/id/101/100/50", ID: 5 },
    { original: "https://picsum.photos/id/1000/600/300", thumbnail: "https://picsum.photos/id/1000/100/50", ID: 6 },
    { original: "https://picsum.photos/id/1001/600/300", thumbnail: "https://picsum.photos/id/1001/100/50", ID: 7 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='HotelView'>
      <MDBCard style={{ maxWidth: '70%' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <div className='box'>
              <div className="gallery-containe">
                <button className="prev-button" onClick={handlePrev}>❮</button>
                <img src={images[currentIndex].original} alt="Main View" className="main-image" />
                <button className="next-button" onClick={handleNext}>❯</button>
                <div className="thumbnails">
                  {images.filter((value) => (value.ID <= 5)).map((image, index) => (
                    <img
                      key={index}
                      src={image.thumbnail}
                      alt={`Thumbnail ${index}`}
                      className="thumbnail"
                      onMouseEnter={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol md='4' className='Info-Component'>
            <MDBCardBody className='Info'>
              <MDBCardText className='Ratings'>
                <span>
                  5
                  <span class="fa fa-star checked"></span>
                  <i style={{fontSize: '5px'}} class="fa">&#xf111;</i>
                   Hotel
                </span>
                <span>1271 Ratings</span>
              </MDBCardText>
              <div>
                <MDBCardTitle>Trident Nariman Point</MDBCardTitle>
                <span>Marine Drive | 2 minutes walk to Nariman Point</span>
              </div>
              <MDBCardText className='Facilitate'>
                <span>Spa</span>
                <span>Swimming Pool</span>
                <span>&more</span>
              </MDBCardText>
              <MDBCardText className='Advantages'>
                <small className='text-muted'>Couple Friendly</small>
                <small className='text-muted'>Free Cancellation</small>
                <small className='text-muted'>Breakfast Included</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}

export default HotelView;