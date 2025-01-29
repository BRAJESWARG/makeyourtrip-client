import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Carousel from 'react-bootstrap/Carousel';
import './CardCarousel.css';

export default function Product(props) {
  return (
    <CardGroup>
      <Card>
        <Card.Img className='CardImg' variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/de/11/48/mohan-mahal.jpg?w=900&h=500&s=1" />
        <div>
          <Card.Body>
            <Card.Title>Up to 15% OFF* on MOHAN MAHAL, Jaipur!</Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid till: 31st Jan ’25</small>
          </Card.Footer>
        </div>
      </Card>
      <br />
    </CardGroup>
  );
}
