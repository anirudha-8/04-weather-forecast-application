import axios from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export const getCurrentWeather = async (city) => {
	try {
		const response = await axios.get(baseURL, {
			params: {
				q: city,
				unit: "metric",
				appid: apiKey,
			},
		});
		return response.data;
	} catch (error) {
		console.error(`Error in fetching weather data: ${error.message}`);
		throw error;
	}
};
