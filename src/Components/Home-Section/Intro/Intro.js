import React from "react";
// import { ArrayofyourTrip } from "../../ArrayOfBlog/ArrayOfBlog";
// import { Link } from "react-router-dom";
import './Intro.css';

const Intro = ({ yourTrip }) => {

    // const [yourTrip] =useContext(ArrayofyourTrip)

    return (
        <div className="Intro" >
            <div className="IntroComponent" >
                {/* <h3>Popular Destinations</h3>
                <p>We have selected some best locations around the world for you.</p> */}
                <h3>Your Heart's GPS: Set to Us!</h3>
                <p>Choose your destination... but be warned, wherever you go, We might just follow.</p>


                <div className='IntroContainer-A'>
                    <div className='IntroContainer-1'>
                        {/* {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (

                            <Link to={`/article/${val.Category}/${val.ID}`} key={index} >
                                <img src={val.Image4} className='introImg1' alt="" />
                                <div className='introContent1'>
                                    <p className='introTitle1'>{val.Title}</p>
                                    <p className='introCategory1'>{val.Category} / {val.Date}</p>
                                </div>
                            </Link>

                        ))} */}
                        <img
                            // src='https://rukminim2.flixcart.com/image/850/1000/l3j2cnk0/poster/o/2/e/medium-kedarnath-temple-god-poster-for-worship-room-living-room-original-imagemuskgzt6xjb.jpeg?q=90&crop=false'
                            src='https://m.media-amazon.com/images/I/61UbPgo5-rL.jpg'
                            className='introImg1 CommonImg' alt=""
                        />
                        <div className='introContent1'>
                            <p className='introTitle1'>Kedarnath</p>
                        </div>
                    </div>


                    {/* <div className='IntroContainer-2'>
                        {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (
                            <div key={index} className='box'>
                                <Link to={`/article/${val.Category}/${val.ID}`}>
                                    <img src={val.Image1} className='introImg2 CommonImg' alt='' />
                                    <div className='introContent2'>
                                        <p className='introTitle2'>{val.Title.substring(0, 59)}.</p>
                                        <p className='introCategory2'>{val.Category} / {val.Date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}

                        {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (
                            <div key={index} className='box'>
                                <Link to={`/article/${val.Category}/${val.ID}`}>
                                    <img src={val.Image2} className='introImg2 CommonImg' alt='' />
                                    <div className='introContent2'>
                                        <p className='introTitle2'>{val.Title.substring(0, 59)}.</p>
                                        <p className='introCategory2'>{val.Category} / {val.Date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div> */}


                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1646014970/nckkszchauqiyf0xk2xv.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Paris</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://www.noblehousetours.com/wp-content/uploads/2017/04/lakshadweep-islands.jpg'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Lakshadweep</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.fodors.com/wp-content/uploads/2023/05/HERO-JERKINBALI-dreamstime_xxl_54327061.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Bali</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://s7ap1.scene7.com/is/image/incredibleindia/top-station-munnar-kerala-1-attr-hero?qlt=82&ts=1726672844426'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Munnar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='IntroContainer-B'>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.thomascook.in/blog/wp-content/uploads/2023/11/Simla-in-january.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Simla</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://a.storyblok.com/f/95452/3000x1687/4804cee083/india-manali-in-winter.png/m/1200x630/filters:focal(null)'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Manali</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.hillscenic.co.in/images/p-package/darjeeling.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Darjeeling</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://www.tgetravels.com/wp-content/uploads/2024/06/Seven-Sisters-Falls-5-kaga.jpg'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Mawsynram</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-1'>
                        <img
                            src='https://www.holidest.com/images/abroad/malaysia/Langkawi-3.jpg'
                            className='introImg1 CommonImg' alt=""
                        />
                        <div className='introContent1'>
                            <p className='introTitle1'>Langkawi</p>
                        </div>
                    </div>
                </div>

                <div className='IntroContainer-A'>
                    <div className='IntroContainer-1'>
                        {/* {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (

                            <Link to={`/article/${val.Category}/${val.ID}`} key={index} >
                                <img src={val.Image4} className='introImg1' alt="" />
                                <div className='introContent1'>
                                    <p className='introTitle1'>{val.Title}</p>
                                    <p className='introCategory1'>{val.Category} / {val.Date}</p>
                                </div>
                            </Link>

                        ))} */}
                        <img
                            // src='https://rukminim2.flixcart.com/image/850/1000/l3j2cnk0/poster/o/2/e/medium-kedarnath-temple-god-poster-for-worship-room-living-room-original-imagemuskgzt6xjb.jpeg?q=90&crop=false'
                            src='https://m.media-amazon.com/images/I/61UbPgo5-rL.jpg'
                            className='introImg1 CommonImg' alt=""
                        />
                        <div className='introContent1'>
                            <p className='introTitle1'>Kedarnath</p>
                        </div>
                    </div>


                    {/* <div className='IntroContainer-2'>
                        {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (
                            <div key={index} className='box'>
                                <Link to={`/article/${val.Category}/${val.ID}`}>
                                    <img src={val.Image1} className='introImg2 CommonImg' alt='' />
                                    <div className='introContent2'>
                                        <p className='introTitle2'>{val.Title.substring(0, 59)}.</p>
                                        <p className='introCategory2'>{val.Category} / {val.Date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}

                        {yourTrip.filter((value) => (value.ID === '2') && (value.Category === "Advertisement")).map((val, index) => (
                            <div key={index} className='box'>
                                <Link to={`/article/${val.Category}/${val.ID}`}>
                                    <img src={val.Image2} className='introImg2 CommonImg' alt='' />
                                    <div className='introContent2'>
                                        <p className='introTitle2'>{val.Title.substring(0, 59)}.</p>
                                        <p className='introCategory2'>{val.Category} / {val.Date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div> */}


                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1646014970/nckkszchauqiyf0xk2xv.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Paris</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://www.noblehousetours.com/wp-content/uploads/2017/04/lakshadweep-islands.jpg'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Lakshadweep</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.fodors.com/wp-content/uploads/2023/05/HERO-JERKINBALI-dreamstime_xxl_54327061.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Bali</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://s7ap1.scene7.com/is/image/incredibleindia/top-station-munnar-kerala-1-attr-hero?qlt=82&ts=1726672844426'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Munnar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IntroContainer-B'>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.thomascook.in/blog/wp-content/uploads/2023/11/Simla-in-january.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Simla</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://a.storyblok.com/f/95452/3000x1687/4804cee083/india-manali-in-winter.png/m/1200x630/filters:focal(null)'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Manali</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-2'>
                        <div className='box'>
                            <img
                                src='https://www.hillscenic.co.in/images/p-package/darjeeling.jpg'
                                className='introImg2 CommonImg' alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Darjeeling</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img
                                src='https://www.tgetravels.com/wp-content/uploads/2024/06/Seven-Sisters-Falls-5-kaga.jpg'
                                className='introImg2 CommonImg'
                                alt=''
                            />
                            <div className='introContent2'>
                                <p className='introTitle2'>Mawsynram</p>
                            </div>
                        </div>
                    </div>

                    <div className='IntroContainer-1'>
                        <img
                            src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9b/c4/e6/the-calm-dayang-bunting.jpg?w=500&h=500&s=1'
                            className='introImg1 CommonImg' alt=""
                        />
                        <div className='introContent1'>
                            <p className='introTitle1'>Langkawi</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Intro;
