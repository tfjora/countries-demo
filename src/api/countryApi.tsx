import { fakeCountryList } from "../_mockData/country";
import { ICountryApi } from "../_models/country";

const apiKey = "b8dd9e4822a13e930aaf74c38bd0dbca";

export const fetchCountries = async (): Promise<ICountryApi[]> => {
  return await fetch(`http://api.countrylayer.com/v2/all2?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((actualData) => {
      if (actualData.error) return fakeCountryList;
      return actualData;
    });
};
