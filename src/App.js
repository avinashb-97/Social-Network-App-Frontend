import './App.css';
import Header from './components/Header';
import Body from './components/body/Body';
import { Route, Routes } from "react-router-dom";
import InstitutionLogin from './components/institutionLogin/InstitutionLogin';
import InstitutionSignup from './components/institutionLogin/InstitutionSignup';
import InstitutionHome from './components/institutionAdminPanel/InstitutionHome';
import PrivateRoutes from './components/utils/PrivateRoute';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/loginPage/RegisterPage';

function App() {
  return (
    <div className='main-bg'>


      <Routes> 
        
        <Route exact path="/" element = { <LoginPage/> } /> 
        <Route exact path="/register" element = { <RegisterPage/> } />
        <Route 
        exact
        path="/home"
        element={
          // <Header />
          <Body />
        }
        />

        
        <Route exact path="/institution" element={ <InstitutionLogin /> } />
        <Route element={<PrivateRoutes navigateTo="/institution" />}>
          <Route exact path="/institution/home" element={ <InstitutionHome /> } />
        </Route>

        <Route exact path="/institution/create" element = { <InstitutionSignup/> } />
        
        
      </Routes>

    </div>
  );
}

export default App;
