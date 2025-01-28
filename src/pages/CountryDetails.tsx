import { IoArrowBackSharp } from "react-icons/io5";
import StyledLink from "../components/StyledLink";
import { Navigate, useParams } from "react-router-dom";
import { useCountriesStore } from "../stores/countriesStore";

const CountryDetails = () => {
  const params = useParams();
  const { getCountryDataByName, getNeighboursData } = useCountriesStore();

  const countryData = getCountryDataByName(params.countryName || "");

  if (!countryData) return <Navigate to={"/"} />;

  const neighboursData = getNeighboursData(countryData.borderCountries || []);

  return (
    <div className="mx-auto px-4 tablet:px-8 py-8">
      {/* Back button */}
      <div className="w-full pb-5">
        <StyledLink
          to="-1"
          icon={IoArrowBackSharp}
          text="Back"
          className="my-9"
        />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col tablet-lg:flex-row tablet:gap-12">
        {/* Flag */}
        <div className="w-full max-w-[440px] mx-auto tablet-lg:w-1/2">
          <img
            src={countryData?.flagURL}
            alt="Country flag"
            className="w-full rounded-md shadow-lg"
          />
        </div>

        {/* Data */}
        <div className="mt-10 tablet:mt-0 tablet-lg:w-1/2 flex flex-col desktop-lg:flex-row flex-wrap gap-12">
          <h4 className="text-[22px] font-extrabold w-full">
            {countryData.name.official}
          </h4>
          {/* First column */}
          <div className="flex flex-col gap-4 desktop-lg:w-2/5 grow">
            {countryData.name.native &&
              countryData.name.native !== countryData.name.official && (
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {countryData.name.native}
                </p>
              )}
            <p>
              <span className="font-semibold">Population: </span>
              {countryData.population.toLocaleString("en-US")}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {countryData.region}
            </p>
            {countryData.subregion && (
              <p>
                <span className="font-semibold">Sub Region: </span>
                {countryData.subregion}
              </p>
            )}
            <p>
              <span className="font-semibold">Capital: </span>
              {countryData.capital}
            </p>
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-4 desktop-lg:w-2/5 grow">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {countryData.domain}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {countryData.currency}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {countryData.languages.join(", ")}
            </p>
          </div>

          {/* Border countries */}
          {neighboursData && neighboursData.length > 0 && (
            <div className="">
              <h5 className="font-semibold mb-4">Border Countries:</h5>
              <div className="flex flex-wrap gap-2">
                {neighboursData.map((neighbour) => (
                  <StyledLink
                    key={neighbour.officialName}
                    text={neighbour.commonName}
                    to={`/country/${neighbour.officialName}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
