import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('caracas');
  const [error, setError] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60a50089bea3b9e3e83b8eb7493f6621&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
      setError(true);
      });
  }, [city]);

  if (!weather) {
      return <div className="bg-white text-gray-900 dark:bg-gray-900 pt-10  h-screen flex flex-col justify-start items-center dark:text-white text-3xl font-bold">Loading...</div>;
    }
    if (error) {
      return <div className="bg-white text-gray-900 dark:bg-gray-900 pt-10  h-screen flex flex-col justify-start items-center dark:text-white text-3xl font-bold">Ciudad no encontrada <p>refresca la pagina</p></div>;
    }
      return (
      <div>
        <div className="bg-white relative px-10 flex justify-center h-10 dark:bg-gray-900">
          <input ref={inputRef} type="text" id="texto" className="block w-6/12	p-4 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a city or country"/>
          <button onClick={() => setCity(inputRef.current.value)} type="submit" id="addbtn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        <div className="bg-white text-gray-900 dark:bg-gray-900 pt-10  h-screen flex flex-col justify-start items-center dark:text-white text-3xl font-bold">
          <ul className='gap-4 flex flex-col'>
            <h1 className="text-center text-4xl">Weather</h1>
            <h2>{weather.name}</h2>
            <p>Temperatura: {weather.main.temp} C°</p>
            <p>Temperatura Min: {weather.main.temp_min} C°</p>
            <p>Temperatura Max: {weather.main.temp_max} C°</p>
          </ul>
        </div>
    </div>
  )
};
