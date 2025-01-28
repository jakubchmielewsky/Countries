import { useEffect } from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import { useCountriesStore } from "../stores/countriesStore";

const options = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic",
];

const Filters = () => {
  const { filterCountries, filters, setFilter } = useCountriesStore();

  useEffect(() => {
    filterCountries();
  }, [filters, filterCountries]);

  const handleRegionChange = (newValue: string) => {
    setFilter("region", newValue);
  };

  const handleQueryChange = (newValue: string) => {
    setFilter("query", newValue);
  };

  return (
    <div className="flex flex-col justify-between h-[148px] pb-5 tablet:flex-row tablet:items-center">
      <SearchInput value={filters.query} onChange={handleQueryChange} />
      <Dropdown
        value={filters.region}
        onChange={handleRegionChange}
        placeholder="Filter by Region"
        options={options}
      />
    </div>
  );
};

export default Filters;
