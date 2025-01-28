export const getWeather = async () => {
	const response = await fetch(import.meta.env.VITE_API_URL)
	const data = await response.json()
	return data
}
