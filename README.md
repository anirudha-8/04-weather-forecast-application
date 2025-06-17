# 🌤️ Weather Forecast App

A sleek, responsive Weather Forecast App built with **React**, **Vite**, and **Tailwind CSS**, powered by the **OpenWeather API**.

---

## 🚀 Features

- 🌍 Search weather by city
- ☀️ Real-time current weather
- 📅 5-day weather forecast
- 🧭 Today’s Highlights:
  - Air Quality Index (AQI)
  - Sunrise & Sunset
  - Humidity, Pressure & Wind Speed
  - Visibility & UV Index
- 🧑‍💻 Fully responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

| Technology     | Usage                     |
| -------------- | ------------------------- |
| React          | Frontend UI framework     |
| Vite           | Lightning-fast bundler    |
| Tailwind CSS   | Styling & responsiveness  |
| Axios          | API calls                 |
| OpenWeather API| Weather data source       |
| React Router   | Page navigation           |

---

## 📂 Folder Structure

```js
    weather-forecast-app/
    ├── public/
    ├── src/
    │ ├── assets/
    │ ├── components/
    │ ├── layouts/
    │ ├── pages/
    │ ├── services/
    │ ├── App.jsx
    │ ├── main.jsx
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🌐 API Used

- **OpenWeather API**  
  [https://openweathermap.org/api](https://openweathermap.org/api)

To use this API:

1. Create a free account on [OpenWeather](https://openweathermap.org/)
2. Generate an API key
3. Add it to your environment file:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

---

## 🧪 Run Locally

1. Clone the project

    ```bash
        git clone <https://github.com/your-username/weather-forecast-app.git>
        cd weather-forecast-app
    ```

2. Install dependencies

    ```bash
        npm install
    ```

3. Add your .env file

    ```bash
        VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

4. Start the development server

    ```bash
        npm run dev
    ```

---

## 🙌 Acknowledgements

- OpenWeather API

- Tailwind CSS

- React Router
