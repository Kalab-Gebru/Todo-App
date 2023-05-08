import React ,{useContext}from 'react'
import { Route,Routes } from 'react-router-dom';
import { ThemeContext } from "./contexts/ThemeContext";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${isDarkMode ? "dark" : " "}`}>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App