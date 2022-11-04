import { useEffect, useState } from "react";
import { fetchCountries } from "./api/countryApi";
import "./App.css";
import AddCountriesToVisit from "./components/Country/Add";
import ViewCountry from "./components/Country/View/ViewCountry";
import { ICountry } from "./_models/country";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [countriesToVisit, setCountriesToVisit] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetchCountries();
        setCountries(response);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, []);

  const onChange = (value: ICountry) => setCountriesToVisit([...countriesToVisit, value]);

  const onRemove = (value: ICountry) => {
    const newItemsList = countriesToVisit.filter((i) => i.name !== value.name);
    setCountriesToVisit(newItemsList);
  };
  const onVisited = (value: ICountry) => {
    setCountriesToVisit((prevCountryState) => {
      const newState = prevCountryState.map((item) => {
        if (item.name === value.name) return { ...item, visited: !Boolean(value.visited) };
        return item;
      });

      return newState;
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <AddCountriesToVisit
        onChange={onChange}
        countries={countries}
        countriesToVisit={countriesToVisit}
      />
      <ViewCountry data={countriesToVisit} onRemove={onRemove} onVisited={onVisited} />
    </div>
  );
}

export default App;
