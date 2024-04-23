import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './index.css';
import App from './App';
import Main from './MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route

          path='/'
          element={<App />}

        />

        <Route

        path='/App'
        element={<Main />}

        />

      </Routes>
    </Router>
  </React.StrictMode>
);
