export const getWeather = async (city: string) => {
	try {
		if (city.length >= 3) {
			const response = await fetch(`${import.meta.env.VITE_API_URL}&q=${city}`)
			const data = await response.json()

			return data
		}

		return []
	} catch (error) {
		console.error('ERROR', error)
	}
}
