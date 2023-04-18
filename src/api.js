const URL = 'https://api.weatherapi.com/v1/forecast.json';
const KEY = '3babf595b26c4b1482c111127231004';

const searchQuery = async (query) => {
  try {
    const res = await fetch(
      `${URL}?key=${KEY}&q=${query}&days=6&aqi=no&alerts=no`,
      { mode: 'cors' }
    );
    const data = await res.json();

    if (!res.ok) {
      throw Error(data.error.message);
    }

    return data;
  } catch (err) {
    console.log(err);
    throw err.message;
  }
};

export default searchQuery;
