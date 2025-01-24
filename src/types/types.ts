export interface CountryType{
    name: {official: string, native: string},
    population: number,
    region: string,
    subRegion: string,
    capital: string,
    domain: string,
    currency: string,
    languages: string[],
    borderCountries: string[],
}