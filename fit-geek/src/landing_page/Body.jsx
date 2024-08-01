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
            review: "The workout plans provided by this website have completely transformed my fitness routine. The detailed instructions and videos are very helpful!"
        },
        {
            name: 'Anita M.',
            review: "I love the variety of exercises available. Whether I want to do strength training or yoga, I always find what I need. Highly recommend!"
        },
        {
            name: 'Ravi K.',
            review: "The personalized diet plans have helped me achieve my fitness goals faster than I expected. Great resource for anyone looking to improve their health."
        },
        {
            name: 'Priya S.',
            review: "The community support and expert advice available on this site are invaluable. I feel more motivated and informed than ever before."
        },
        {
            name: 'Rajesh R.',
            review: "The mobile app is a game-changer. I can track my progress and follow workouts no matter where I am. Very user-friendly and efficient."
        },
        {
            name: 'Nina L.',
            review: "The customer service is exceptional. They quickly resolved an issue I had with my subscription and were very courteous. Thank you!"
        }
    ];
    

    const cards = [
        {
            modelName: "Personalized Workout Plans",
            description: "The fitness website offers customized workout routines tailored to individual fitness levels and goals, ensuring maximum effectiveness and safety.",
            link: "#"
        },
        {
            modelName: "Comprehensive Nutrition Guides",
            description: "Users have access to detailed nutrition plans that complement their workout routines, helping them achieve a balanced diet and reach their fitness goals faster.",
            link: "#"
        },
        {
            modelName: "Expert Guidance",
            description: "With access to professional trainers and fitness experts, users can get reliable advice and tips to improve their exercise form and overall health.",
            link: "#"
        },
        {
            modelName: "Progress Tracking",
            description: "The website features tools to track workout progress, monitor body measurements, and set achievable goals, keeping users motivated and on track.",
            link: "#"
        },
        {
            modelName: "Variety of Workouts",
            description: "From strength training to yoga and cardio, the website offers a wide range of workout options to keep users engaged and prevent workout monotony.",
            link: "#"
        },
        {
            modelName: "Community Support",
            description: "A strong community of fitness enthusiasts provides motivation, support, and a sense of accountability, making the fitness journey more enjoyable.",
            link: "#"
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
          <div className="what_to_eat">
            <div className="carrot" style={styles}>
              {/* <FontAwesomeIcon icon={faCarrot} beat size="2xl" color='orange' /> 17-1-24 */}
            </div>
            <h1>Confused! What to Eat? When To Eat?</h1>
            <h3>Join with us and get personalised Diet Plans</h3>
            <a href="www.google.com">Search Diet Plans </a>
          </div>
        </section>

        <section>
          <div className="heading_motivation">
            <h4>Get result</h4>
            <h2>Nutrition tracking works, </h2>
            <h2>here's the proof</h2>
          </div>
          <div className="container_2">
            <div className="nxt_to_slider_img">
              <img src={myImage_2} />
            </div>
            <div className="slider">
              <Slider {...settings}>
                {info_array.map((i) => (
                  <>
                    <div className="carousel_names">
                      <h2>{i.name}</h2>
                    </div>
                    <div className="carousel_reviews">
                      <h3>{i.review}</h3>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section>
          <div className="merchandise">
            <div className="headings">
              <h1>Strong. Lean.</h1>
              <h1>Healthy.</h1>
              <h3>Nutrition Course</h3>
              <p>
                Learn the basics of nutrition and approach health with a new
                perspective. Develop eating habits that nourish your body and
                fuel your goals, all without strict dieting.
              </p>
              <button className="buy_btn">Buy Now</button>
            </div>
            <div className="product_img">
              <img src={product} />
            </div>
          </div>
        </section>

        <section>
          <div className="void" id="void">
            <div className="crop">
              <ul id="card-list" style={{ "--count": cards.length }}>
                {cards.map((card, index) => (
                  <li className="li-body" key={index}>
                    <div className="card-body">
                      <a href={card.link}>
                        <span className="model-name">{card.modelName}</span>
                        <span>{card.description}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="last-circle"></div>
              <div className="second-circle"></div>
            </div>
            <div className="mask"></div>
            <div className="center-circle"></div>
          </div>
        </section>
      </>
    );
};

export default Body;