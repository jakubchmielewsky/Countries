import './App.css';
import { useEffect } from 'react';
import { useCountriesStore } from './stores/countriesStore';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const {loadCountries, countriesInitialized} = useCountriesStore();

  useEffect(()=>{
    loadCountries();
  },[loadCountries])

  if(!countriesInitialized) return <div>Loading</div>

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home/>}  
        >
          <Route
            path='/country/:countryName'
            element={<div>country details</div>}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
