import './style.scss';

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

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

const handleSubmit = (e) => {
  e.preventDefault();
  const { value } = input;
  if (value.trim() === '') return;
  getData(value);
};

form.addEventListener('submit', handleSubmit);
