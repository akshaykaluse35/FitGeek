import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import Footer from '../footer/Footer';
import '../Meditation-Pages/meditation-pages.css';
import ladyMeditationWithMatt from '../images/google.svg';


const WalkingMeditation = () => {
  return (
    <>
      <NavbarMH />
      <div className="content-container">
        <h1>Is it OK if I don't notice benefits from meditating right away?</h1>
        <div className="article-section">
          <div className="p-article-section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi quaerat neque illum accusantium. Laudantium harum sint quibusdam animi? Laborum eaque quaerat ullam minima saepe, temporibus possimus facere deleniti laudantium dolores dolor, fugit voluptatum, ipsam magni autem? Animi, possimus commodi facere dignissimos quia maxime consequuntur ullam non enim quasi debitis?
               <br /><br />
              <img src={ladyMeditationWithMatt} alt="" />
              <br /><br /><br />
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam praesentium quasi quas minus doloribus, atque, recusandae vero nulla rerum nisi quam molestiae optio quia, culpa sit nostrum voluptate omnis et incidunt cumque? Maiores commodi magni iste assumenda harum animi fugiat ipsa a odio repellendus, veniam, ipsam dolorem? Optio eligendi ab ex, quidem sit non nam at in maxime aspernatur. Necessitatibus nostrum aliquid deleniti minima enim repellat culpa perferendis placeat corrupti quaerat, laudantium voluptatum officia tenetur rerum iure sed cupiditate debitis pariatur et. Tempore quasi assumenda fugit et esse ipsam, animi eum consectetur quis. Saepe magnam ratione quae facere ea.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WalkingMeditation;
