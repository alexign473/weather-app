import searchQuery from './api';

const App = () => {
  console.log('App');
  const state = {
    loading: null,
    error: null,
    data: null,
  };

  const $viewApp = document.querySelector('#viewApp');
  const $currTemp = document.querySelector('#currTemp');
  const $currStatus = document.querySelector('#currStatus');
  const $currLocation = document.querySelector('#currLocation');
  const $currDate = document.querySelector('#currDate');

  const $closeSidebarBtn = document.querySelector('#closeSidebarBtn');
  const $error = document.querySelector('#error');
  const $searchForm = document.querySelector('#searchForm');
  const $input = $searchForm.querySelector('input');

  const updateView = () => {
    if (!state.data) return;
    const { current, location, forecast } = state.data;
    $currTemp.textContent = current.temp_c;
    $currStatus.textContent = current.condition.text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    console.log(forecast.forecastday);
  };

  const getData = async (query) => {
    state.loading = true;
    $error.textContent = '';
    console.log('loading', state);

    try {
      const data = await searchQuery(query);
      console.log(data);
      state.data = data;
      updateView();
    } catch (err) {
      state.error = true;
      console.log('error', state);
      $error.textContent = err;
    } finally {
      state.loading = false;
      console.log('finally', state);
    }
  };

  getData('tokyo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = $input;
    if (value.trim() === '') return;
    console.log(value);
    getData(value);
  };

  $searchForm.addEventListener('submit', handleSubmit);
};

export default App;
