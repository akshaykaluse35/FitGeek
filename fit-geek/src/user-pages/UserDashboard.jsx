// import React, { useEffect } from "react";
import { useAuth } from "../store/authContext";
import { Navigate } from "react-router-dom";
import './nutritionTrackerStyling.css';
// import NutritionTracker from "../user-pages/NutritionTracker";
// import NutritionixAPI from "../user-pages/NutritionTracker";
import NutritionCard from "./Cards";

export const UserDashboard = () => {
    const styled_header = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      background: 'grey',
      // background: 'linear-gradient(90deg, rgba(96,150,180,1) 6%, rgba(147,191,207,1) 23%, rgba(238,233,218,1) 64%)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer'
    }
    const fitgeek_style = {
      marginLeft: '10px'
    }
    const {isLoggedIn, isLoading} = useAuth();
    if(isLoading){
        return <h1>Loading....</h1>
    }

    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }



  return (
    <>
      <header>
        <div style={styled_header} className="container-header">
            <div className="upper-container">
              <div style={fitgeek_style} className="logo">FitGeek</div>
              <div className="user-name">Hey username.....</div>
            </div>
        </div>


      </header>
      <NutritionCard/>
      {/* <NutritionixAPI/> */}
    </>
  );
};
