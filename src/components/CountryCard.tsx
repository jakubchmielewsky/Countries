import { Link } from "react-router-dom";

interface Props{
    flagURL: string,
    name: string,
    population: number,
    region: string,
    capital: string,
}

const CountryCard: React.FC<Props> = ({flagURL, name, population, region, capital}) => {

    return ( 
        <Link to={`/country/${name}`}>
            <div className="text-left w-full rounded-md overflow-hidden shadow-md bg-white text-c-gray-111517 dark:text-white dark:bg-c-dark-blue-elements ">
                <img src={flagURL} alt="country flag" className="w-full"/>
                <div className="flex flex-col py-8 px-6 gap-0.5">
                    <h4 className="text-[18px] font-extrabold mb-4">{name}</h4>
                    <p>Population: <span>{population.toLocaleString("en-US")}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>

                </div>
             </div>
        </Link>
        
     );
}
 
export default CountryCard;