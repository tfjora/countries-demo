export interface ICountryApi {
    name: string;
    capital: string;
    region: string;
  }

export interface ICountry extends ICountryApi {
    visited?: boolean;
    disabled?: boolean;
  }
  