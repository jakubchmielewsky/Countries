import { useCountriesStore } from "../stores/countriesStore";
import CountryCard from "./CountryCard";

const CountriesList = () => {
    const {countries} = useCountriesStore();

    return ( 
        <ul className="w-full h-full grid grid-cols-1 px-14 gap-12">
            {countries.map((country,index)=>{
                return(
                    <li key={index}>
                        <CountryCard 
                            flagURL={country.flagURL} 
                            name={country.name.official} 
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    </li>
                )
            })}
        </ul>
     );
}
 
export default CountriesList;