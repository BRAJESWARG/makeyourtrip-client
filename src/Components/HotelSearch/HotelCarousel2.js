import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Product from "./Product";
import { responsive } from "../utilis/data";

function testimonials(props) {
    // const product = productData.map((item) => (
    //     // <Product
    //         // name={item.name}
    //         // designation={item.designation}
    //         url={item.Image1}
    //     // price={item.price}
    //     // description={item.description}
    //     // />
    // ));

    return (
        <div className="testimonials">
            <div>
                <hr className="hr-left" />
                <hr className="hr-right" />
                &nbsp;&nbsp;<h1 className="testimonials-text">{props.value}</h1>&nbsp;&nbsp;
            </div>
            <Carousel
                className="Carousel"
                swipeable={true}
                draggable={false}
                // centerMode={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                // keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                // containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListclassName="custom-dot-list-style"
            // itemclassName="carousel-item-padding-40-px"

            >
                {props.Image1}
            </Carousel>
        </div>
    );
}

export default testimonials;