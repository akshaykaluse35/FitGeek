import React from "react";
import './Land_page.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import product from '../images/product.png';
import myImage_2 from '../images/left_cover.png';

function Body() {

    const styles = {
        marginBottom: '2rem'
    }

    const info_array = [
        {
            name: 'Sagar J.',
            review: "If this still doesn't work, please double-check if there are any other conflicting styles in your code, and ensure that there are no parent containers affecting the layout. If possible, provide more details about the HTML structure, and I'll do my best to assist you."
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000,
    };

    return (
        <>
            <section>
                <div className='what_to_eat'>
                    <div className='carrot' style={styles}>
                        {/* <FontAwesomeIcon icon={faCarrot} beat size="2xl" color='orange' /> 17-1-24 */}
                    </div>
                    <h1>Confused! What to Eat? When To Eat?</h1>
                    <h3>Join with us and get personalised Diet Plans</h3>
                    <a href='www.google.com'>Search Diet Plans </a>
                </div>
            </section>

            <section>
                <div className='heading_motivation'>
                    <h4>Get result</h4>
                    <h2>Nutrition tracking works, </h2>
                    <h2>here's the proof</h2>

                </div>
                <div className='container_2'>
                    <div className='nxt_to_slider_img'>
                        <img src={myImage_2} />
                    </div>
                    <div className='slider'>
                        <Slider {...settings}>
                            {info_array.map((i) => (
                                <>
                                    <div className='carousel_names'>
                                        <h2>{i.name}</h2>
                                    </div>
                                    <div className='carousel_reviews'>
                                        <h3>{i.review}</h3>
                                    </div></>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            <section>
                <div className='merchandise'>
                    <div className='headings'>
                        <h1>Strong. Lean.</h1>
                        <h1>Healthy.</h1>
                        <h3>Nutrition Course</h3>
                        <p>Learn the basics of nutrition and approach health with a new perspective. Develop eating habits that nourish your body and fuel your goals, all without strict dieting.</p>
                        <button className='buy_btn'>Buy Now</button>
                    </div>
                    <div className='product_img'>
                        <img src={product} />
                    </div>

                </div>
            </section>


        </>
    )
};

export default Body;