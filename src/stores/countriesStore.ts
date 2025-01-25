import { create } from "zustand";
import { CountryType } from "../types/types";

interface CountriesInterface{
    countries: CountryType[],
    countriesInitialized: boolean,
    loadCountries: () => void,
}

export const useCountriesStore = create<CountriesInterface>((set) => ({
    countries: [],
    countriesInitialized: false,

    loadCountries: async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) throw new Error(`fetch error! status:${response.status}`);

        const data = await response.json();

        const mappedCountries: CountryType[] = data.map((country: any) => ({
            name: {
                official: country.name.official,
                native: Object.values(country.name.nativeName || {})
                  .map((lang: any) => lang.official)
                  .join(", ") || country.name.official,
              },
              flagURL: country.flags?.png || "",
              population: country.population || 0,
              region: country.region || "",
              subRegion: country.subregion || "",
              capital: country.capital?.[0] || "No capital",
              domain: country.tld?.[0] || "",
              currency: Object.values(country.currencies || {})
                .map((currency: any) => `${currency.name} (${currency.symbol || ""})`)
                .join(", "),
              languages: Object.values(country.languages || []),
              borderCountries: country.borders || [],
            
        }));

        set({countriesInitialized: true, countries: mappedCountries});
        } catch (error) {
            console.error(error);
        }
        
    }
}));