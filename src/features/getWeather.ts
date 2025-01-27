export const getWeather = async (city = 'москва') => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}&q=${city}`)
	const data = await response.json()
	return data
}
