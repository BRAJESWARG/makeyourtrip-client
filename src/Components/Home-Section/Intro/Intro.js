import React from "react";
// import { ArrayofyourTrip } from "../../ArrayOfBlog/ArrayOfBlog";
import { Link } from "react-router-dom";

const Intro = ({ yourTrip }) => {

    // const [yourTrip] =useContext(ArrayofyourTrip)

    return (

        <div className='introContainer'>
            <div className='introContainer-1'>
                {yourTrip.filter((value) => (value.ID === '4') && (value.Category === "Hotels")).map((val, index) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} key={index} >
                        <img src={val.Image} className='introImg1' alt="" />
                        <div className='introContent1'>
                            <p className='introTitle1'>{val.Title}</p>
                            <p className='introCategory1'>{val.Category} / {val.Date}</p>
                        </div>
                    </Link>

                ))}
            </div>


            <div className='introContainer-2'>
                {yourTrip.filter((value) => (value.ID === '3') && (value.Category === "Hotels")).map((val, index) => (
                    <div key={index} className='box'>
                        <Link to={`/article/${val.Category}/${val.ID}`}>
                            <img src={val.Image} className='introImg2' alt='' />
                            <div className='introContent2'>
                                <p className='introTitle2'>{val.Title.substring(0, 59)}.</p>
                                <p className='introCategory2'>{val.Category} / {val.Date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>




    );
}

export default Intro;