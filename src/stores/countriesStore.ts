import { create } from "zustand";
import { CountryType } from "../types/types";

interface CountriesInterface {
  countries: CountryType[];
  filteredCountries: CountryType[];
  countriesInitialized: boolean;
  filters: { query: string; region: string };
  setFilter: (type: string, value: string) => void;
  filterCountries: () => void;
  loadCountries: () => void;
  getCountryDataByName: (name: string) => CountryType | null;
  getNeighboursData: (ISOCodesList: string[]) => Array<{
    officialName: string;
    commonName: string;
  }>;
}

export const useCountriesStore = create<CountriesInterface>((set, get) => ({
  countries: [],
  filteredCountries: [],
  countriesInitialized: false,
  filters: { query: "", region: "" },

  setFilter: (type, value) => {
    set((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [type]: value,
      },
    }));
  },

  filterCountries: () => {
    const { filters, countries } = get();

    const filteredCountries = countries
      .filter(
        (country) =>
          (filters.region === "" || country.region === filters.region) &&
          (country.name.official
            .toLowerCase()
            .includes(filters.query.toLowerCase()) ||
            country.capital.toLowerCase().includes(filters.query.toLowerCase()))
      )
      .sort((a, b) => a.name.official.localeCompare(b.name.official));

    set({ filteredCountries });
  },

  loadCountries: async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok)
        throw new Error(`fetch error! status:${response.status}`);

      const data = await response.json();

      const mappedCountries: CountryType[] = data.map((country: any) => ({
        name: {
          official: country.name.official,
          common: country.name.common,
          native:
            Object.values(country.name.nativeName || {})
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
        ISOCode: country.cca3 || "",
      }));

      set({ countriesInitialized: true, countries: mappedCountries });
    } catch (error) {
      console.error(error);
    }
  },

  getCountryDataByName: (name) => {
    return (
      get().countries.find((country) => country.name.official === name) || null
    );
  },

  getNeighboursData: (ISOCodesList: string[]) => {
    const countries = get().countries;

    const neighboursData: Array<{
      officialName: string;
      commonName: string;
    }> = [];

    ISOCodesList.forEach((targetISOCode) => {
      const neighbour = countries.find(
        (country) => country.ISOCode === targetISOCode
      );

      if (neighbour) {
        neighboursData.push({
          officialName: neighbour.name.official,
          commonName: neighbour.name.common,
        });
      }
    });

    return neighboursData;
  },
}));
