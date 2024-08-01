import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../store/authContext"; // Ensure this import points to the correct location
import '../user-pages/navbar-user.css';

const NavbarUser = () => {
  const [apiData, setApiData] = useState({});
  const { token } = useAuth();

  const recipeAPI = async () => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setApiData(data);
      }
    } catch (error) {
      console.log("Error in Recipe API", error);
    }
  };

  useEffect(() => {
    recipeAPI();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="navbar-user-container">
      <div className="milky">
        Hello {apiData.username || 'User'}
      </div>
      <div className="navbar-logout-button">
        <Link to={'/logout'}>
          <button className="button-17" role="button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarUser;
