import React from 'react';
import * as RouterDOM from 'react-router-dom';
import GlobalContext from './context/global-context';
import Register from './components/routes/register/Register';
import Login from './components/routes/login/Login';
import { Default } from './locale/default';
import { loadLocale } from './locale/scripts/load-locale';
import { LanguagesE } from './locale/scripts/languages.enum';
//import styles from './App.module.css';

function App() 
{
  const [locale, setLocale] = React.useState(new Default());

  React.useEffect(()=>
  {
    setLocale(loadLocale(LanguagesE.el_GR));
  }, []);


  
  return (
    <React.Fragment>

      <GlobalContext.Provider
      value={{
        locale: locale
      }}
      >

        <RouterDOM.Routes>

          <RouterDOM.Route path='/register' element={<Register />} />
          
          <RouterDOM.Route path='/login' element={<Login />} />

          <RouterDOM.Route path='*' element={<RouterDOM.Navigate to="/register" replace/>}/>
          
        </RouterDOM.Routes>

      </GlobalContext.Provider>

    </React.Fragment>
  );
}

export default App;
