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
            name: {official: country.name.common, native: "Unknown"},
            flagURL: country.flags.svg,
            population: country.population,
            region: country.region,
            subregion: "unknown",
            capital: country.capital,
            domain: country.tld,
            currency: "not set",
            languages: [],
            borderCountries: [],
        }))

        set({countriesInitialized: true, countries: mappedCountries});
        } catch (error) {
            console.error(error);
        }
        
    }
}));