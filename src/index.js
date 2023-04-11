import './style.scss';

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const $city = document.querySelector('#city');
const $country = document.querySelector('#country');
const $localTime = document.querySelector('#localTime');
const $tempC = document.querySelector('#tempC');

const getData = async (query) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3babf595b26c4b1482c111127231004&q=${query}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw Error(data.error.message);
    }

    return data;
  } catch (err) {
    console.warn(err);
  }
};

getData('tokyo');

const handleSubmit = async (e) => {
  e.preventDefault();
  const { value } = input;
  if (value.trim() === '') return;

  const data = await getData(value);
  if (!data) return;

  const { location, current } = data;
  const { name, country, localtime } = location;
  const { temp_c: tempC } = current;
  $city.textContent = name;
  $country.textContent = country;
  $localTime.textContent = localtime;
  $tempC.textContent = tempC;
};

form.addEventListener('submit', handleSubmit);
