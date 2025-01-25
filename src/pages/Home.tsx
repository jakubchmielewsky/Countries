import CountriesList from "../components/CountriesList";
import Filters from "../components/Filters";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className="min-h-screen font-nunito bg-c-gray-fa dark:bg-c-very-dark-blue-bg"> 
            <Header/>
            <div className="max-w-[1600px] mx-auto">
                <Filters/>
                <CountriesList/>
            </div>
            
            
        </div>
     );
}
 
export default Home;