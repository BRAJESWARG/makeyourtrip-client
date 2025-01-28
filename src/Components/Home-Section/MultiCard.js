import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import './CardCarousel.css';

function MultiCard() {
    return (
        <div className='MultiCard'>
            <h1>
                Offers for you
            </h1>
            {/* <div className='MultiCard-container'>
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
                    </Card> */}
                    {/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card> */}
                {/* </CardGroup>
            </div> */}


            <div style={{ display: 'block', width: '90%', padding: 30, alignItems: 'center' }}>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <div className='MultiCard-container'>
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

                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <div className='MultiCard-container'>
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

                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <div className='MultiCard-container'>
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

                            </CardGroup>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default MultiCard;
