import { useEffect } from 'react';
import './App.css'
import { useCountriesStore } from './stores/countriesStore'

function App() {
  const {loadCountries} = useCountriesStore();

  useEffect(()=>{
    loadCountries();
  },[loadCountries])

  return (
    <>
    gfdgf
    </>
  )
}

export default App
