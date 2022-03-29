import React from 'react';
import * as RouterDOM from 'react-router-dom';
import Register from './components/routes/register/Register';
import Login from './components/routes/login/Login';
//import styles from './App.module.css';

function App() {
  return (
    <React.Fragment>

      <RouterDOM.Routes>

        <RouterDOM.Route path='/register' element={<Register />} />
        
        <RouterDOM.Route path='/login' element={<Login />} />

        <RouterDOM.Route path='*' element={<RouterDOM.Navigate to="/register" replace/>}/>
        
      </RouterDOM.Routes>

    </React.Fragment>
  );
}

export default App;
