import React from 'react';
import ReactDOM from 'react-dom'; 
import LandPageWrapper from './GatherComponents';
import { AuthTokenProvider } from './store/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthTokenProvider>
    <React.StrictMode>
      <LandPageWrapper/>
    </React.StrictMode>
  </AuthTokenProvider>
);
