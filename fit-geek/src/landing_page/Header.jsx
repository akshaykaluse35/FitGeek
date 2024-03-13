import React from "react";
import './Land_page.css';
import myImage from '../images/smartphone.jpg';

const Header = () => {

    const styles = {
        fontfamily: 'Playfair Display, serif',
        fontSize: '2.5rem'
    }
    const fitGeek = 'FitGeek' 
    return (

        <>
            <div className='header'>
                <div className='upper_header'>
                    <div className='brand_name'> {/*This is for the logo_name */}
                        <h1>{fitGeek}</h1>
                    </div>

                    <div className='user_verification'> {/*login and signup*/}
                        <div className='log_in'>
                                <button className='btn_log_in'>
                                    <h3>Login</h3>
                                </button>
                        </div>
                        <div className='sign_up'>
                            <button className="btn_sign_up">
                                <h3>Sign Up</h3>
                            </button>
                        </div>
                    </div>
                </div>

                <section className='container_1'>
                    <div className='typography'>
                        <div className='mini_typography'>
                            <h4>#1 nutrition and diet planning App</h4>
                        </div>

                        <div className='main_typography'>
                            <h4>Reach your Goals</h4>
                            <h6 style={styles}>with Fit-Geek</h6>
                        </div>

                        <div className='lower_typography'>
                            <h5>Build healthy habits with the all-in-one food, exercise, and calorie tracker</h5>
                        </div>

                        <div className='btn_section'>
                            <button>Start Today</button>

                        </div>
                    </div>

                    <div className='svg_img'>
                        <img src={myImage} alt='not available rn' />
                    </div>

                </section>
            </div>

        </>
    )
};

export default Header;


