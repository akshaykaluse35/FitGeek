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
import Exercise from './exercise/Exercise';
// import Uploadexercises from './exercise/UploadExercises';
// import MeditationSubPages from './Meditation-Pages/MeditationSubPages';
import GratitudeMeditation from './Meditation-Pages/GratitudeMeditation';
import VisualMeditation from './Meditation-Pages/VisualMeditation';
import TranscandelMeditation from './Meditation-Pages/TranscandelMeditation';



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
            <Route path='/user/exercise-tracking' element = {<ExerciseTracking/>} />
            <Route path='/user/mental-health' element = {<MentalHealth/>} />
            <Route path='/user/mental-health/meditation' element = {<Meditation/>} />
            <Route path='/user/exercises' element = {<Exercise/>} />
            {/* <Route path='/user/exercises-form' element = {<Uploadexercises/>} /> */}
            <Route path='/user/mental-health/meditation/gratitude-meditation' element = {<GratitudeMeditation/>} />
            <Route path='/user/mental-health/meditation/visual-meditation' element = {<VisualMeditation/>} />
            <Route path='/user/mental-health/meditation/transcandel-meditation' element = {<TranscandelMeditation/>} />
          </Routes>
      </BrowserRouter>
        
    </>
  ); 
}





export default LandPageWrapper;

