import { h } from 'preact';
import { useState } from 'preact/hooks';
import axios from 'axios';

import { DATES, BASE_URL_MDE, BASE_URL_BOG } from '../utils/constants';
import Header from './header';
import ResultsList from './resultsList';
import Loading from './loading';

const App = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('Bogotá');

  const searchDates = () => {
    setLoading(true);
    const data = [];
    const urls = [];
    const BASE_URL = city === 'Medellín' ? BASE_URL_MDE : BASE_URL_BOG;

    for (let date of DATES) {
      const url = axios.get(`${BASE_URL}${date}`);
      urls.push(url);
    }

    axios
      .all(urls)
      .then((responses) => {
        for (let i = 0; i < responses.length; i++) {
          if (responses[i].data.length > 0) {
            data.push(responses[i].data[0].date);
          }
        }
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Header />
      <div id="app">
        <p>
          Searches every day between tomorrow and the end of the year for
          appointments to pick up cedula.
        </p>
        <strong>
          Fetching results will take several minutes. Have patience!
        </strong>
        <p>
          Select city:{' '}
          <select onChange={changeCity} name="city" id="city">
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
          </select>
        </p>
        <button disabled={loading} onClick={searchDates}>
          Search dates in {city}
        </button>
        {loading ? <Loading /> : <ResultsList results={results} />}
      </div>
    </>
  );
};

export default App;
