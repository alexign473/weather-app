import searchQuery from './api';

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

  const $sidebar = document.querySelector('.sidebar');
  const $error = document.querySelector('.sidebar__error');
  const $openSidebarBtn = document.querySelector('#openSidebarBtn');
  const $closeSidebarBtn = document.querySelector('#closeSidebarBtn');
  const $searchForm = document.querySelector('#searchForm');
  const $searchInput = $searchForm.querySelector('input');

  const updateView = () => {
    if (!state.data) return;
    const { current, location, forecast } = state.data;
    $currTemp.textContent = current.temp_c;
    $currStatus.textContent = current.condition.text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    console.log(forecast.forecastday);
  };

  const toggleSidebar = (open) => {
    $sidebar.classList.toggle('active', open);
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

  //   getData('tokyo');

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
