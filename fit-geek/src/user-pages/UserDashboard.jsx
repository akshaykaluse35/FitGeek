// import React, { useEffect } from "react";
import { useAuth } from "../store/authContext";
import { Navigate } from "react-router-dom";
import './nutritionTrackerStyling.css';
// import NutritionTracker from "../user-pages/NutritionTracker";
// import NutritionixAPI from "../user-pages/NutritionTracker";
import NutritionCard from "./Cards";
import NavbarUser from "./NavbarUser";

export const UserDashboard = () => {


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
          <NavbarUser/>
      </header>
      <NutritionCard/>
      {/* <NutritionixAPI/> */}
    </>
  );
};
