import CountriesList from "../components/CountriesList";
import Filters from "../components/Filters";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className="min-h-screen font-nunito bg-c-gray-fa dark:bg-c-very-dark-blue-bg"> 
            <Header/>
            <div className="px-4 py-5">
                <Filters/>
            </div>
            
            <CountriesList/>
        </div>
     );
}
 
export default Home;