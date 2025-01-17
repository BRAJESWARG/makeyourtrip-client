import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';
// import { Link } from "react-router-dom";
import axios from 'axios';
import Logo from '../../Assets/v-logo.png';
import './Nav.css';

function NavComponent() {

  const [yourTrip, setYourTrip] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
      data => setYourTrip(data.data)
    )

  }, [])

  const [show, setShow] = useState(false);
  const [thankYoushow, setThankYouShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleThankYouClose = () => setThankYouShow(false);
  const handleThankYouShow = () => {
    setShow(false)
    setThankYouShow(true)
  };

  let [displayData, setDisplayData] = useState(false)
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      telephoneNumber: ""

    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log(formData)
    setDisplayData(!displayData)
  }
  // const FinalStep = ({ data }) => {

  const handleDownload = (event) => {
    event.preventDefault()
    var doc = new jsPDF();
    doc.text(
      10,
      10,
      "First Name: " + formData.firstName +
      "Last Name: " + formData.lastName +
      "Email: " + formData.email +
      "Mobile No.: " + formData.telephoneNumber


    );

    doc.save("form.pdf");
  };

  // const displayHandler = () => {
  //     setDisplayData((prev) => !prev)
  // }

  return (
    <Navbar className='bg-body-tertiary navContainer' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} height="30px" alt="logo" />
          VentureVibes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/" className='NavCategory'>Home</Nav.Link> */}
            {yourTrip.filter((value) => value.ID === '1').map((val, index) => (

              <Nav.Link href={`/${val.Category}`} className='NavCategory' key={index} >{val.Category}</Nav.Link>

            ))}            
          </Nav>
          <Form className="d-flex">

            <Button variant="outline-success" className='login'>Login</Button>
            <Button variant="outline-success primary" className='get-started' onClick={handleShow}>Get Started</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={submitHandler}
          >

            <div className="name-row">
              <input
                type="text"
                required
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>

            <div className="contact-row">
              <input
                type="email"
                required
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />

              <input
                type="Telephone Number"
                placeholder="Telephone Number"
                onChange={handleChange}
                name="telephoneNumber"
                value={formData.telephoneNumber}
              />
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleThankYouShow} className="btn" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        show={thankYoushow}
        onHide={handleThankYouClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <h1>Thank You</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDownload}>
            Take print of data
          </Button>
          <Button variant="primary" onClick={handleThankYouClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavComponent;
