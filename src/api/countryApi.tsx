import { ICountryApi } from "../_models/country";

const apiKey = "b8dd9e4822a13e930aaf74c38bd0dbca";

const fakeCountryList: ICountryApi[] = [
  { name: "Norway", capital: "Test", region: "test2" },
  { name: "Sweeden", capital: "Test", region: "test2" },
  { name: "Finland", capital: "Test", region: "test2" },
];

export const fetchCountries = async (): Promise<ICountryApi[]> => {
  return await fetch(`http://api.countrylayer.com/v2/all2?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((actualData) => {
      if (actualData.error) return fakeCountryList;
      return actualData;
    });
};
