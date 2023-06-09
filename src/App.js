import searchQuery from './api';
import { imageByCode, formatDate, dateIsTomorrow } from './helpers';

const TODAY = new Date();

const App = () => {
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
  const $wind = document.querySelector('#wind');
  const $humidity = document.querySelector('#humidity');
  const $visibility = document.querySelector('#visibility');
  const $airp = document.querySelector('#airp');

  $currDate.textContent = formatDate(TODAY);

  const createForecastCard = (item) => {
    const { code, text, icon } = item.day.condition;
    const img = imageByCode(code);
    const src = `${img ? `./assets/${img}.png` : icon}`;
    const date = dateIsTomorrow(item.date) ? 'Tomorrow' : formatDate(item.date);

    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
              <p>${date}</p>
              <img src="${src}" alt="${text}" />
              <div class="forecast-card__info">
                <span>${Math.round(item.day.maxtemp_c)}&deg;C</span>
                <span>${Math.round(item.day.mintemp_c)}&deg;C</span>
              </div>
    `;
    return card;
  };

  const renderForecast = (forecast) => {
    // Delete first item of array === current day
    const itemsToShow = forecast.slice(1);
    $forecast.innerHTML = '';
    $forecast.append(...itemsToShow.map(createForecastCard));
  };

  const updateCurrent = (current, location) => {
    const { text, code, icon } = current.condition;
    const img = imageByCode(code);
    $currImg.src = `${img ? `./assets/${img}.png` : icon}`;
    $currTemp.textContent = Math.round(current.temp_c);
    $currStatus.textContent = text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    $wind.textContent = current.wind_mph;
    $humidity.textContent = current.humidity;
    $visibility.textContent = current.vis_miles;
    $airp.textContent = current.pressure_mb;
  };

  const updateView = (data) => {
    if (!data) return;
    const { current, location, forecast } = data;
    renderForecast(forecast.forecastday);
    updateCurrent(current, location);
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
    setLoadingBtn(true);
    $error.textContent = '';

    try {
      const data = await searchQuery(query);
      updateView(data);
      toggleSidebar(false);
    } catch (err) {
      $error.textContent = err;
    } finally {
      setLoadingBtn(false);
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
