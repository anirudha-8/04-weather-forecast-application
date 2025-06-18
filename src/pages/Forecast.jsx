import { useState } from "react";
import { getForecast } from "../services/getForecast";

const Forecast = () => {
	const [city, setCity] = useState("");
	const [error, setError] = useState(null);
	const [forecastList, setForecastList] = useState([]);

	const fetchWeatherData = async (city) => {
		try {
			if (!city) {
				setError("Please enter a city name!");
				setForecastList([]);
				return;
			}

			const data = await getForecast(city);
			const filtered = data.list.filter((item) =>
				item.dt_txt.includes("12:00:00")
			);
			setForecastList(filtered);
			setError(null);
		} catch (error) {
			console.error(`Error fetching data: ${error.message}`);
			setError("Could not fetch forecast data. Please try again!");
			setForecastList([]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchWeatherData(city.trim());
	};

	return (
		<section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
			{/* Header */}
			<div className="text-center mb-6">
				<h2 className="text-3xl font-semibold mb-4 text-blue-700">
					5-Day Forecast
				</h2>
				<p className="text-gray-600">
					Check the next 5 days forecast (midday values).
				</p>
			</div>

			{/* Search Form */}
			<form
				onSubmit={handleSubmit}
				className="flex flex-col sm:flex-row gap-4 items-center mb-6"
			>
				<input
					type="text"
					name="city"
					id="city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Enter city name"
					required
					className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
				>
					Search
				</button>
			</form>

			{/* Output Section */}
			{error && (
				<p className="text-red-500 font-semibold text-lg text-center">
					{error}
				</p>
			)}

			{forecastList.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{forecastList.map((item) => (
						<div
							key={item.dt}
							className="bg-white p-4 rounded shadow text-center"
						>
							<p className="font-semibold text-blue-700">
								{new Date(item.dt_txt).toLocaleDateString()}
							</p>
							<img
								src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
								alt={item.weather[0].description}
								className="mx-auto"
							/>
							<p className="text-lg font-medium">{item.main.temp}°C</p>
							<p className="text-gray-600 capitalize">
								{item.weather[0].description}
							</p>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Forecast;
