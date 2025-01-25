export interface CountryType{
    name: {official: string, native: string},
    flagURL: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    domain: string,
    currency: string,
    languages: string[],
    borderCountries: string[],
}