import { useState } from "react";
import { getCurrentWeather } from "../services/getCurrentWeather";

const Highlights = () => {
	const [city, setCity] = useState("");
	const [error, setError] = useState(null);
	const [weatherData, setWeatherData] = useState(null);

	const formatTime = (unix) => {
		return new Date(unix * 1000).toLocaleTimeString();
	};

	const fetchWeatherData = async (city) => {
		try {
			if (!city) {
				setError("Please enter a city name!");
				setWeatherData(null);
				return;
			}

			const data = await getCurrentWeather(city);
			setWeatherData(data);
			setError(null);
		} catch (error) {
			console.error(`Error fetching data: ${error.message}`);
			setError("Could not fetch weather data. Please try again!");
			setWeatherData(null);
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
					Today's Highlights
				</h2>
				<p className="text-gray-600">
					Sunrise, humidity, pressure, wind, and more!
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
			<div className="text-center">
				{error && <p className="text-red-500 font-semibold text-lg">{error}</p>}

				{weatherData && (
					<div className="bg-white shadow rounded p-6 max-w-md mx-auto text-left">
						<h2 className="text-2xl font-bold mb-4 text-blue-700">
							Weather Highlights in {weatherData.name}
						</h2>
						<ul className="space-y-2 text-gray-700">
							<li>
								<span className="font-semibold">🌅 Sunrise:</span>{" "}
								{formatTime(weatherData.sys.sunrise)}
							</li>
							<li>
								<span className="font-semibold">🌇 Sunset:</span>{" "}
								{formatTime(weatherData.sys.sunset)}
							</li>
							<li>
								<span className="font-semibold">💧 Humidity:</span>{" "}
								{weatherData.main.humidity}%
							</li>
							<li>
								<span className="font-semibold">🌬️ Pressure:</span>{" "}
								{weatherData.main.pressure} hPa
							</li>
							<li>
								<span className="font-semibold">🌫️ Visibility:</span>{" "}
								{(weatherData.visibility / 1000).toFixed(1)} km
							</li>
							<li>
								<span className="font-semibold">💨 Wind Speed:</span>{" "}
								{weatherData.wind.speed} m/s
							</li>
							<li>
								<span className="font-semibold">🧭 Wind Direction:</span>{" "}
								{weatherData.wind.deg}°
							</li>
						</ul>
					</div>
				)}
			</div>
		</section>
	);
};

export default Highlights;
