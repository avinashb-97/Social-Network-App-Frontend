import './App.css';
import Header from './components/Header';
import Body from './components/body/Body';
import { Route, Routes } from "react-router-dom";
import InstitutionLogin from './components/institutionLogin/InstitutionLogin';
import InstitutionSignup from './components/institutionLogin/InstitutionSignup';

function App() {
  return (
    <div className='main-bg'>

      <Routes> 

        <Route 
        exact
        path="/"
        element={
          // <Header />
          <Body />
        }
        />

        
        <Route 
        exact
        path="/institution"
        element={
          <InstitutionLogin />
        }
        />

        <Route 
        exact
        path="/institution/create"
        element = {
          <InstitutionSignup/>
        }
        />
        
      </Routes>

    </div>
  );
}

export default App;
