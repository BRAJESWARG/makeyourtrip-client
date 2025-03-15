import React, { useState } from 'react'
import { Link } from "react-scroll";
import "./InsideNav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

function InsideNav() {

    const [activeItem, setActiveItem] = useState(null);

    const navItems = [
        { id: "StayOptions", label: "Stay Options" },
        { id: "Amenities", label: "Amenities" },
        { id: "Host", label: "Host" },
        { id: "GuestReviews", label: "Guest Reviews" },
        { id: "PropertyPolicies", label: "Property Policies" },
        { id: "Location", label: "Location" },
        { id: "SimilarProperties", label: "Similar Properties" },
    ];

    return (
        <div className='InsideNav'>
            <section id="details-navigation" className="Navigationstyles__NavigationStyleContainer-sc-1qhzy4a-0 eYxIWd">
                <div className="Navigationstyles__StyledWrapper-sc-1qhzy4a-1 iOBtpt">
                    <ul className="Navigationstyles__MenuList-sc-1qhzy4a-2 dwFebw">
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className={`Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 ${activeItem === item.id ? "jyDmWNActiv" : "jyDmWN"
                                            }`}
                                        onClick={() => setActiveItem(item.id)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                {/* <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Stay Options</button>
                                </Link> */}
                                {/* <a href="#stays" data-testid="navigation-header-cta-#stays" className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN">Stay Options</a> */}
                            </div>
                        </li>
                        {/* <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Amenities</button>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Host</button>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Guest Reviews</button>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Property Policies</button>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button>Location</button>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                <Link to="contact" spy={true} smooth={true} className="Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 jyDmWN" >
                                    <button> Similar Properties</button>
                                </Link>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default InsideNav;