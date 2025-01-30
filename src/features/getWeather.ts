import { haveGeoStore } from '@/store/haveGeo'
import { latitudeStore } from '@/store/latitude'
import { longitudeStore } from '@/store/longitude'

export const getWeather = async (city: string) => {
	const {
		haveGeo: { haveGeo },
	} = haveGeoStore

	const {
		latitude: { latitude },
	} = latitudeStore
	const {
		longitude: { longitude },
	} = longitudeStore

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
