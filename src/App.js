import React, { Suspense, createContext, useContext } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import Loader from './Components/components/Loader';
import Svgs from './Assets/Svgs'
import NavigationRoutes from './Components/Navigation';

export const ContextTheme = createContext(Svgs)

function App() {
  return (
    <>
    <ContextTheme.Provider value={Svgs}>
      <Suspense fallback={<Loader/>}>
        <div className="App">
          <NavigationRoutes />
        </div>
      </Suspense>
    </ContextTheme.Provider>
    </>
  );
}

export default App;
