import { Outlet, useLocation } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import Filters from "../components/Filters";
import Header from "../components/Header";

const Home = () => {
    const pathname = useLocation().pathname;

    return ( 
        <div className="min-h-screen font-nunito bg-c-gray-fa dark:bg-c-very-dark-blue-bg"> 
            <Header/>
            <div className="max-w-[1600px] mx-auto">

                {pathname.includes("/country") ? <Outlet/> :
                    <>
                         <Filters/>
                         <CountriesList/>
                    </>
                }
               
            </div>
            
            
        </div>
     );
}
 
export default Home;