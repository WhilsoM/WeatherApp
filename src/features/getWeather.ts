import { geoStore } from '@/store/geo'

export const getWeather = async (city: string) => {
	const {
		haveGeo: { haveGeo },
		latitude: { latitude },
		longitude: { longitude },
	} = geoStore

	let URL = `${import.meta.env.VITE_API_URL}`

	try {
		if (city.length >= 3) {
			if (haveGeo) {
				URL += `&q=${latitude},${longitude}`
			} else {
				URL += `&q=${city}`
			}

			const response = await fetch(URL)
			const data = await response.json()

			return data
		}

		return []
	} catch (error) {
		console.error('ERROR', error)
	}
}
