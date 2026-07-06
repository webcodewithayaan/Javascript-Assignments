'use strict';

const cityEl = document.getElementById('city');
const tempEl = document.getElementById('temp');
const conditionEl = document.getElementById('condition');
const hiLoEl = document.getElementById('hi-lo');
const summaryEl = document.getElementById('summary');
const hourlyRow = document.getElementById('hourly-row');
const dailyList = document.getElementById('daily-list');
const phone = document.getElementById('phone');
const weatherScreen = document.getElementById('weather-screen');
const citySwitcher = document.getElementById('city-switcher');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const hint = document.getElementById('hint');

const cities = {
  bariloche: {
    name: 'Bariloche',
    temp: '30°',
    condition: 'Snow',
    hiLo: 'H:36° L:22°',
    summary: 'Windy conditions from 3PM–5PM, with heavy snow expected at 6PM.',
    theme: 'theme-snow',
    hourly: [
      { time: 'Now', icon: '🌨️', temp: '30°' },
      { time: '10AM', icon: '🌨️', temp: '31°' },
      { time: '11AM', icon: '🌨️', temp: '32°' },
      { time: '12PM', icon: '❄️', temp: '33°' },
      { time: '1PM', icon: '❄️', temp: '34°' },
      { time: '2PM', icon: '🌬️', temp: '33°' },
      { time: '3PM', icon: '🌬️', temp: '31°' },
    ],
    daily: [
      { day: 'Today', icon: '❄️', lo: 22, hi: 36 },
      { day: 'Tue', icon: '❄️', lo: 21, hi: 34 },
      { day: 'Wed', icon: '☁️', lo: 29, hi: 38 },
      { day: 'Thu', icon: '☁️', lo: 24, hi: 40 },
      { day: 'Fri', icon: '🌨️', lo: 23, hi: 37 },
      { day: 'Sat', icon: '❄️', lo: 20, hi: 33 },
      { day: 'Sun', icon: '☀️', lo: 19, hi: 35 },
    ],
  },
  london: {
    name: 'London',
    temp: '58°',
    condition: 'Partly Cloudy',
    hiLo: 'H:72° L:49°',
    summary: 'Cloudy conditions from 1AM–7AM, with sunny conditions expected at 8AM.',
    theme: 'theme-cloudy',
    hourly: [
      { time: 'Now', icon: '☁️', temp: '58°' },
      { time: '10PM', icon: '☁️', temp: '56°' },
      { time: '11PM', icon: '☁️', temp: '54°' },
      { time: '12AM', icon: '🌙', temp: '51°' },
      { time: '1AM', icon: '🌙', temp: '50°' },
      { time: '2AM', icon: '🌙', temp: '49°' },
      { time: '3AM', icon: '☀️', temp: '52°' },
    ],
    daily: [
      { day: 'Today', icon: '⛅', lo: 49, hi: 72 },
      { day: 'Tue', icon: '☀️', lo: 63, hi: 77 },
      { day: 'Wed', icon: '☀️', lo: 51, hi: 70 },
      { day: 'Thu', icon: '⛅', lo: 48, hi: 69 },
      { day: 'Fri', icon: '🌦️', lo: 50, hi: 66 },
      { day: 'Sat', icon: '⛅', lo: 52, hi: 68 },
      { day: 'Sun', icon: '☀️', lo: 55, hi: 74 },
    ],
  },
  paris: {
    name: 'Paris',
    temp: '47°',
    condition: 'Heavy Rain',
    hiLo: 'H:62° L:41°',
    summary: 'Rainy conditions tonight, continuing through the morning.',
    theme: 'theme-rain',
    hourly: [
      { time: 'Now', icon: '🌧️', temp: '47°' },
      { time: '11PM', icon: '🌧️', temp: '45°' },
      { time: '12AM', icon: '🌧️', temp: '44°' },
      { time: '1AM', icon: '🌧️', temp: '43°' },
      { time: '2AM', icon: '🌦️', temp: '41°' },
      { time: '3AM', icon: '🌦️', temp: '40°' },
      { time: '4AM', icon: '☁️', temp: '42°' },
    ],
    daily: [
      { day: 'Today', icon: '🌧️', lo: 41, hi: 62 },
      { day: 'Tue', icon: '🌧️', lo: 38, hi: 56 },
      { day: 'Wed', icon: '🌦️', lo: 41, hi: 54 },
      { day: 'Thu', icon: '☁️', lo: 42, hi: 57 },
      { day: 'Fri', icon: '⛅', lo: 40, hi: 58 },
      { day: 'Sat', icon: '☀️', lo: 39, hi: 60 },
      { day: 'Sun', icon: '☀️', lo: 43, hi: 63 },
    ],
  },
  'new york': {
    name: 'New York',
    temp: '68°',
    condition: 'Clear',
    hiLo: 'H:75° L:60°',
    summary: 'Clear skies throughout the day with light winds from the west.',
    theme: 'theme-clear',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '68°' },
      { time: '2PM', icon: '☀️', temp: '71°' },
      { time: '3PM', icon: '☀️', temp: '73°' },
      { time: '4PM', icon: '☀️', temp: '74°' },
      { time: '5PM', icon: '🌤️', temp: '72°' },
      { time: '6PM', icon: '🌤️', temp: '69°' },
      { time: '7PM', icon: '🌙', temp: '64°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 60, hi: 75 },
      { day: 'Tue', icon: '☀️', lo: 61, hi: 77 },
      { day: 'Wed', icon: '⛅', lo: 59, hi: 74 },
      { day: 'Thu', icon: '☀️', lo: 62, hi: 78 },
      { day: 'Fri', icon: '🌤️', lo: 63, hi: 79 },
      { day: 'Sat', icon: '⛅', lo: 60, hi: 76 },
      { day: 'Sun', icon: '☀️', lo: 61, hi: 77 },
    ],
  },
  karachi: {
    name: 'Karachi',
    temp: '95°',
    condition: 'Sunny',
    hiLo: 'H:98° L:82°',
    summary: 'Hot and humid conditions all day with a light sea breeze in the evening.',
    theme: 'theme-hot',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '95°' },
      { time: '2PM', icon: '☀️', temp: '97°' },
      { time: '3PM', icon: '☀️', temp: '98°' },
      { time: '4PM', icon: '🌤️', temp: '96°' },
      { time: '5PM', icon: '🌤️', temp: '93°' },
      { time: '6PM', icon: '🌇', temp: '90°' },
      { time: '7PM', icon: '🌙', temp: '87°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 82, hi: 98 },
      { day: 'Tue', icon: '☀️', lo: 83, hi: 99 },
      { day: 'Wed', icon: '🌤️', lo: 81, hi: 97 },
      { day: 'Thu', icon: '☀️', lo: 82, hi: 98 },
      { day: 'Fri', icon: '🌤️', lo: 80, hi: 96 },
      { day: 'Sat', icon: '☀️', lo: 81, hi: 97 },
      { day: 'Sun', icon: '☀️', lo: 83, hi: 99 },
    ],
  },
  riyadh: {
    name: 'Riyadh',
    temp: '104°',
    condition: 'Sunny',
    hiLo: 'H:108° L:80°',
    summary: 'Clear desert skies with intense afternoon heat, cooling off after sunset.',
    theme: 'theme-hot',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '104°' },
      { time: '2PM', icon: '☀️', temp: '107°' },
      { time: '3PM', icon: '☀️', temp: '108°' },
      { time: '4PM', icon: '☀️', temp: '105°' },
      { time: '5PM', icon: '🌤️', temp: '100°' },
      { time: '6PM', icon: '🌇', temp: '93°' },
      { time: '7PM', icon: '🌙', temp: '86°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 80, hi: 108 },
      { day: 'Tue', icon: '☀️', lo: 81, hi: 109 },
      { day: 'Wed', icon: '☀️', lo: 79, hi: 106 },
      { day: 'Thu', icon: '☀️', lo: 80, hi: 107 },
      { day: 'Fri', icon: '☀️', lo: 78, hi: 105 },
      { day: 'Sat', icon: '☀️', lo: 79, hi: 106 },
      { day: 'Sun', icon: '☀️', lo: 80, hi: 108 },
    ],
  },
  jeddah: {
    name: 'Jeddah',
    temp: '97°',
    condition: 'Partly Cloudy',
    hiLo: 'H:100° L:84°',
    summary: 'Humid coastal heat with a light breeze coming off the Red Sea.',
    theme: 'theme-hot',
    hourly: [
      { time: 'Now', icon: '🌤️', temp: '97°' },
      { time: '2PM', icon: '☀️', temp: '99°' },
      { time: '3PM', icon: '☀️', temp: '100°' },
      { time: '4PM', icon: '🌤️', temp: '98°' },
      { time: '5PM', icon: '🌤️', temp: '95°' },
      { time: '6PM', icon: '🌇', temp: '91°' },
      { time: '7PM', icon: '🌙', temp: '88°' },
    ],
    daily: [
      { day: 'Today', icon: '🌤️', lo: 84, hi: 100 },
      { day: 'Tue', icon: '☀️', lo: 85, hi: 101 },
      { day: 'Wed', icon: '🌤️', lo: 83, hi: 99 },
      { day: 'Thu', icon: '☀️', lo: 84, hi: 100 },
      { day: 'Fri', icon: '🌤️', lo: 82, hi: 98 },
      { day: 'Sat', icon: '☀️', lo: 83, hi: 99 },
      { day: 'Sun', icon: '☀️', lo: 84, hi: 100 },
    ],
  },
  dubai: {
    name: 'Dubai',
    temp: '99°',
    condition: 'Sunny',
    hiLo: 'H:102° L:85°',
    summary: 'Bright and dry throughout the day with clear skies into the night.',
    theme: 'theme-hot',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '99°' },
      { time: '2PM', icon: '☀️', temp: '101°' },
      { time: '3PM', icon: '☀️', temp: '102°' },
      { time: '4PM', icon: '☀️', temp: '100°' },
      { time: '5PM', icon: '🌤️', temp: '97°' },
      { time: '6PM', icon: '🌇', temp: '92°' },
      { time: '7PM', icon: '🌙', temp: '88°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 85, hi: 102 },
      { day: 'Tue', icon: '☀️', lo: 86, hi: 103 },
      { day: 'Wed', icon: '☀️', lo: 84, hi: 101 },
      { day: 'Thu', icon: '☀️', lo: 85, hi: 102 },
      { day: 'Fri', icon: '☀️', lo: 83, hi: 100 },
      { day: 'Sat', icon: '☀️', lo: 84, hi: 101 },
      { day: 'Sun', icon: '☀️', lo: 85, hi: 102 },
    ],
  },
  tokyo: {
    name: 'Tokyo',
    temp: '72°',
    condition: 'Partly Cloudy',
    hiLo: 'H:78° L:64°',
    summary: 'Mild and pleasant with scattered clouds through the afternoon.',
    theme: 'theme-cloudy',
    hourly: [
      { time: 'Now', icon: '⛅', temp: '72°' },
      { time: '2PM', icon: '⛅', temp: '75°' },
      { time: '3PM', icon: '🌤️', temp: '77°' },
      { time: '4PM', icon: '🌤️', temp: '76°' },
      { time: '5PM', icon: '⛅', temp: '73°' },
      { time: '6PM', icon: '☁️', temp: '70°' },
      { time: '7PM', icon: '🌙', temp: '67°' },
    ],
    daily: [
      { day: 'Today', icon: '⛅', lo: 64, hi: 78 },
      { day: 'Tue', icon: '☁️', lo: 63, hi: 76 },
      { day: 'Wed', icon: '🌦️', lo: 65, hi: 74 },
      { day: 'Thu', icon: '⛅', lo: 62, hi: 77 },
      { day: 'Fri', icon: '☀️', lo: 64, hi: 79 },
      { day: 'Sat', icon: '⛅', lo: 63, hi: 78 },
      { day: 'Sun', icon: '☀️', lo: 65, hi: 80 },
    ],
  },
  sydney: {
    name: 'Sydney',
    temp: '66°',
    condition: 'Sunny',
    hiLo: 'H:70° L:55°',
    summary: 'Clear and breezy with plenty of sunshine through the day.',
    theme: 'theme-clear',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '66°' },
      { time: '2PM', icon: '☀️', temp: '69°' },
      { time: '3PM', icon: '☀️', temp: '70°' },
      { time: '4PM', icon: '🌤️', temp: '68°' },
      { time: '5PM', icon: '🌤️', temp: '65°' },
      { time: '6PM', icon: '🌇', temp: '61°' },
      { time: '7PM', icon: '🌙', temp: '58°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 55, hi: 70 },
      { day: 'Tue', icon: '☀️', lo: 56, hi: 71 },
      { day: 'Wed', icon: '⛅', lo: 54, hi: 68 },
      { day: 'Thu', icon: '☀️', lo: 55, hi: 69 },
      { day: 'Fri', icon: '🌤️', lo: 53, hi: 67 },
      { day: 'Sat', icon: '☀️', lo: 54, hi: 68 },
      { day: 'Sun', icon: '☀️', lo: 55, hi: 70 },
    ],
  },
  cairo: {
    name: 'Cairo',
    temp: '89°',
    condition: 'Sunny',
    hiLo: 'H:93° L:72°',
    summary: 'Dry desert heat during the day, cooling noticeably after sunset.',
    theme: 'theme-hot',
    hourly: [
      { time: 'Now', icon: '☀️', temp: '89°' },
      { time: '2PM', icon: '☀️', temp: '92°' },
      { time: '3PM', icon: '☀️', temp: '93°' },
      { time: '4PM', icon: '☀️', temp: '91°' },
      { time: '5PM', icon: '🌤️', temp: '87°' },
      { time: '6PM', icon: '🌇', temp: '81°' },
      { time: '7PM', icon: '🌙', temp: '76°' },
    ],
    daily: [
      { day: 'Today', icon: '☀️', lo: 72, hi: 93 },
      { day: 'Tue', icon: '☀️', lo: 73, hi: 94 },
      { day: 'Wed', icon: '☀️', lo: 71, hi: 92 },
      { day: 'Thu', icon: '☀️', lo: 72, hi: 93 },
      { day: 'Fri', icon: '☀️', lo: 70, hi: 91 },
      { day: 'Sat', icon: '☀️', lo: 71, hi: 92 },
      { day: 'Sun', icon: '☀️', lo: 72, hi: 93 },
    ],
  },
  moscow: {
    name: 'Moscow',
    temp: '38°',
    condition: 'Snow',
    hiLo: 'H:41° L:29°',
    summary: 'Light snow showers expected through the afternoon with a cold breeze.',
    theme: 'theme-snow',
    hourly: [
      { time: 'Now', icon: '🌨️', temp: '38°' },
      { time: '2PM', icon: '🌨️', temp: '37°' },
      { time: '3PM', icon: '❄️', temp: '36°' },
      { time: '4PM', icon: '❄️', temp: '35°' },
      { time: '5PM', icon: '🌬️', temp: '33°' },
      { time: '6PM', icon: '🌙', temp: '31°' },
      { time: '7PM', icon: '🌙', temp: '30°' },
    ],
    daily: [
      { day: 'Today', icon: '❄️', lo: 29, hi: 41 },
      { day: 'Tue', icon: '🌨️', lo: 27, hi: 39 },
      { day: 'Wed', icon: '☁️', lo: 30, hi: 42 },
      { day: 'Thu', icon: '❄️', lo: 26, hi: 38 },
      { day: 'Fri', icon: '🌨️', lo: 25, hi: 37 },
      { day: 'Sat', icon: '❄️', lo: 28, hi: 40 },
      { day: 'Sun', icon: '☁️', lo: 29, hi: 41 },
    ],
  },
  toronto: {
    name: 'Toronto',
    temp: '54°',
    condition: 'Rain',
    hiLo: 'H:60° L:45°',
    summary: 'Periods of rain throughout the day, clearing up by evening.',
    theme: 'theme-rain',
    hourly: [
      { time: 'Now', icon: '🌧️', temp: '54°' },
      { time: '2PM', icon: '🌧️', temp: '55°' },
      { time: '3PM', icon: '🌦️', temp: '57°' },
      { time: '4PM', icon: '🌦️', temp: '58°' },
      { time: '5PM', icon: '☁️', temp: '56°' },
      { time: '6PM', icon: '☁️', temp: '52°' },
      { time: '7PM', icon: '🌙', temp: '48°' },
    ],
    daily: [
      { day: 'Today', icon: '🌧️', lo: 45, hi: 60 },
      { day: 'Tue', icon: '🌦️', lo: 44, hi: 58 },
      { day: 'Wed', icon: '☁️', lo: 43, hi: 56 },
      { day: 'Thu', icon: '⛅', lo: 42, hi: 59 },
      { day: 'Fri', icon: '☀️', lo: 44, hi: 61 },
      { day: 'Sat', icon: '⛅', lo: 45, hi: 60 },
      { day: 'Sun', icon: '🌦️', lo: 43, hi: 57 },
    ],
  },
  mumbai: {
    name: 'Mumbai',
    temp: '86°',
    condition: 'Thunderstorms',
    hiLo: 'H:89° L:78°',
    summary: 'Humid with scattered thunderstorms likely during the afternoon.',
    theme: 'theme-rain',
    hourly: [
      { time: 'Now', icon: '⛈️', temp: '86°' },
      { time: '2PM', icon: '⛈️', temp: '87°' },
      { time: '3PM', icon: '🌧️', temp: '85°' },
      { time: '4PM', icon: '🌧️', temp: '84°' },
      { time: '5PM', icon: '🌦️', temp: '83°' },
      { time: '6PM', icon: '☁️', temp: '81°' },
      { time: '7PM', icon: '🌙', temp: '80°' },
    ],
    daily: [
      { day: 'Today', icon: '⛈️', lo: 78, hi: 89 },
      { day: 'Tue', icon: '🌧️', lo: 77, hi: 88 },
      { day: 'Wed', icon: '⛈️', lo: 78, hi: 90 },
      { day: 'Thu', icon: '🌦️', lo: 76, hi: 87 },
      { day: 'Fri', icon: '☁️', lo: 77, hi: 88 },
      { day: 'Sat', icon: '🌧️', lo: 78, hi: 89 },
      { day: 'Sun', icon: '⛈️', lo: 79, hi: 90 },
    ],
  },
  istanbul: {
    name: 'Istanbul',
    temp: '64°',
    condition: 'Partly Cloudy',
    hiLo: 'H:69° L:56°',
    summary: 'Mild sea breeze with a mix of sun and clouds throughout the day.',
    theme: 'theme-cloudy',
    hourly: [
      { time: 'Now', icon: '⛅', temp: '64°' },
      { time: '2PM', icon: '🌤️', temp: '67°' },
      { time: '3PM', icon: '🌤️', temp: '69°' },
      { time: '4PM', icon: '⛅', temp: '68°' },
      { time: '5PM', icon: '⛅', temp: '65°' },
      { time: '6PM', icon: '☁️', temp: '62°' },
      { time: '7PM', icon: '🌙', temp: '59°' },
    ],
    daily: [
      { day: 'Today', icon: '⛅', lo: 56, hi: 69 },
      { day: 'Tue', icon: '☁️', lo: 55, hi: 67 },
      { day: 'Wed', icon: '🌦️', lo: 57, hi: 66 },
      { day: 'Thu', icon: '⛅', lo: 54, hi: 68 },
      { day: 'Fri', icon: '☀️', lo: 56, hi: 70 },
      { day: 'Sat', icon: '⛅', lo: 55, hi: 69 },
      { day: 'Sun', icon: '☀️', lo: 57, hi: 71 },
    ],
  },
};

let activeCity = 'bariloche';

function renderCityPills() {
  citySwitcher.innerHTML = Object.keys(cities)
    .map(
      key => `
      <button class="city-pill ${key === activeCity ? 'active' : ''}" data-city="${key}">
        ${cities[key].name}
      </button>`
    )
    .join('');

  document.querySelectorAll('.city-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCity = btn.dataset.city;
      render();
    });
  });
}

function render() {
  const data = cities[activeCity];

  cityEl.textContent = data.name;
  tempEl.textContent = data.temp;
  conditionEl.textContent = data.condition;
  hiLoEl.textContent = data.hiLo;
  summaryEl.textContent = data.summary;

  weatherScreen.className = `weather-screen ${data.theme}`;

  hourlyRow.innerHTML = data.hourly
    .map(
      h => `
      <div class="hour-item">
        <span>${h.time}</span>
        <span class="hour-icon">${h.icon}</span>
        <span class="hour-temp">${h.temp}</span>
      </div>`
    )
    .join('');

  const maxHi = Math.max(...data.daily.map(d => d.hi));
  const minLo = Math.min(...data.daily.map(d => d.lo));
  const range = maxHi - minLo || 1;

  dailyList.innerHTML = data.daily
    .map(d => {
      const left = ((d.lo - minLo) / range) * 100;
      const width = ((d.hi - d.lo) / range) * 100;
      return `
      <div class="day-item">
        <span class="day-name">${d.day}</span>
        <span class="day-icon">${d.icon}</span>
        <span class="lo">${d.lo}°</span>
        <span class="bar-track">
          <span class="bar-fill" style="left:${left}%; width:${width}%"></span>
        </span>
        <span class="hi">${d.hi}°</span>
      </div>`;
    })
    .join('');

  renderCityPills();
  hint.textContent = '';
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  if (cities[query]) {
    activeCity = query;
    render();
    searchInput.value = '';
  } else {
    hint.textContent = `City not found. Try: ${Object.values(cities)
      .map(c => c.name)
      .join(', ')}`;
  }
}

render();
