import React from "react";
import './Land_page.css';

const Footer = () => {
    const fitGeek = 'FitGeek'
    return (
        <>
            <section>
                <div className='container_footer'>
                    <div className='bind_content'>
                        <div className='website_name'>
                            <h2>{fitGeek}</h2>
                            <button className='btn'>Get Started</button>
                        </div>
                        <div className='contents'>
                            <div className='products'>
                                <h3>Producsts</h3>
                                <a>Food</a>
                                <a>Exercise</a>
                                <a>Apps</a>
                                <a>Premium</a>
                            </div>

                            <div className='resources'>
                                <h3>Resources</h3>
                                <a>Blog</a>
                                <a>Community</a>
                                <a>Contact Us</a>
                                <a>Support Center</a>
                            </div>

                            <div className='company'>
                                <h3>Company</h3>
                                <a>About Us</a>
                                <a>Careers</a>
                                <a>Press</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Footer;
