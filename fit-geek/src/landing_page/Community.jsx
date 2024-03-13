import React from "react";
import './Land_page.css';
import community from '../images/community.png';
const Community = () => {
    return (
        <>
            <section>
                <div className='container_community'>
                    <div className='img_community'> <img src={community} /></div>
                    <div className='card_community'>

                        <h2>Hey! Come and Join the Community</h2>
                        <p>Learn the basics of nutrition and approach health with a new perspective. Develop eating habits that nourish your body and fuel your goals, all without strict dieting.</p>
                        <button>Join Community</button>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Community;