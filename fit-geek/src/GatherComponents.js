import React from 'react';
import LandPage from './landing_page/LandPage'; // Adjust import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from  './Pages/Login';
import { Logout } from './Pages/Logout';
import { UserDashboard } from './user-pages/UserDashboard';
import NutritionTracker from './user-pages/NutritionTracker';
import ExerciseTracking from './user-pages/ExerciseTracking';
import MentalHealth from './user-pages/MentalHealth';
import Meditation from './user-pages/mental_health/Meditation';


const LandPageWrapper = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandPage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/user' element = {<UserDashboard/>} />
            <Route path='/user/nutrients' element = {<NutritionTracker/>} />
            <Route path='/user/exercise' element = {<ExerciseTracking/>} />
            <Route path='/user/mental-health' element = {<MentalHealth/>} />
            <Route path='/user/mental-health/meditation' element = {<Meditation/>} />
          </Routes>
      </BrowserRouter>
        
    </>
  ); 
}





export default LandPageWrapper;

