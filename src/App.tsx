import './App.css';
import { useEffect } from 'react';
import { useCountriesStore } from './stores/countriesStore';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const {loadCountries} = useCountriesStore();

  useEffect(()=>{
    loadCountries();
  },[loadCountries])

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<div></div>}  
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
