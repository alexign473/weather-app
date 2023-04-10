import './style.scss';

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

getData('london');
