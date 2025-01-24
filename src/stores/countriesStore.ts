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

        console.log(data);

        set({countriesInitialized: true});
        } catch (error) {
            console.error(error);
        }
        
    }
}));