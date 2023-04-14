import searchQuery from './api';
import { imageByCode } from './helpers';

const App = () => {
  console.log('App');
  const state = {
    loading: null,
    error: null,
    data: null,
  };

  const $currTemp = document.querySelector('#currTemp');
  const $currStatus = document.querySelector('#currStatus');
  const $currLocation = document.querySelector('#currLocation');
  const $currDate = document.querySelector('#currDate');
  const $currImg = document.querySelector('#currImg');

  const $sidebar = document.querySelector('.sidebar');
  const $error = document.querySelector('.sidebar__error');
  const $openSidebarBtn = document.querySelector('#openSidebarBtn');
  const $closeSidebarBtn = document.querySelector('#closeSidebarBtn');
  const $searchForm = document.querySelector('#searchForm');
  const $searchInput = $searchForm.querySelector('input');

  const $forecast = document.querySelector('#forecast');

  const createForecastCard = (item) => {
    const { code, text, icon } = item.day.condition;
    console.log('========');
    console.log(text, code, icon);
    const img = imageByCode(code);
    console.log(img);
    const src = `${img ? `./assets/${img}.png` : icon}`;
    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
              <p>${item.date}</p>
              <img src="${src}" alt="${text}" />
              <div>${item.day.condition.text}</div>
              <div class="forecast-card__info">
                <span>${item.day.maxtemp_c}&deg;C</span>
                <span>${item.day.mintemp_c}&deg;C</span>
              </div>
    `;
    return card;
  };

  const renderForecast = (forecast) => {
    const itemsToShow = forecast.slice(1);
    $forecast.innerHTML = '';
    $forecast.append(...itemsToShow.map(createForecastCard));
  };

  const updateView = () => {
    if (!state.data) return;
    const { current, location, forecast } = state.data;
    const { text, code } = current.condition;
    $currImg.src = `./assets/${imageByCode(code)}.png`;
    $currTemp.textContent = Math.round(current.temp_c);
    $currStatus.textContent = text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    renderForecast(forecast.forecastday);
  };

  const toggleSidebar = (open) => {
    $sidebar.classList.toggle('active', open);
    if (open) {
      $searchInput.focus();
    }
  };

  const setLoadingBtn = (loading) => {
    const $searchBtn = $searchForm.querySelector('button');
    const $span = $searchBtn.querySelector('span');
    const $spinner = $searchBtn.querySelector('i');
    $searchBtn.disabled = loading;
    $spinner.classList.toggle('hidden', !loading);
    $span.classList.toggle('hidden', loading);
  };

  const getData = async (query) => {
    state.loading = true;
    setLoadingBtn(true);
    $error.textContent = '';
    console.log('loading', state);

    try {
      const data = await searchQuery(query);
      console.log(data);
      state.data = data;
      updateView();
      toggleSidebar(false);
    } catch (err) {
      state.error = true;
      console.log('error', state);
      $error.textContent = err;
    } finally {
      state.loading = false;
      setLoadingBtn(false);
      console.log('finally', state);
    }
  };

  getData('tokyo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = $searchInput;
    if (value.trim() === '') return;
    getData(value);
    $searchInput.value = '';
  };

  $openSidebarBtn.addEventListener('click', () => toggleSidebar(true));
  $closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
  $searchForm.addEventListener('submit', handleSubmit);
};

export default App;
