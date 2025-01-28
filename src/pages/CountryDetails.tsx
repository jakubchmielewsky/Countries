import { IoArrowBackSharp } from "react-icons/io5";
import StyledLink from "../components/StyledLink";
import { useParams } from "react-router-dom";
import { useCountriesStore } from "../stores/countriesStore";

const CountryDetails = () => {
  const params = useParams();
  const { countries } = useCountriesStore();

  const findCountryData = () => {
    return countries.find(
      (country) => country.name.official === params.countryName
    );
  };

  const countryData = findCountryData();

  console.log(countryData);

  return (
    <div className="">
      <div className="h-[128px]  flex items-center">
        <StyledLink to="/" icon={IoArrowBackSharp} text="Back" />
      </div>
    </div>
  );
};

export default CountryDetails;
