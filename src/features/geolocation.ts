import { geoStore } from '@/store/geo'
import { useEffect } from 'react'

interface IUseGeolocation {
	latitude: number
	longitude: number
}

export const geolocation = () => {
	const {
		haveGeo: { setHaveGeo },
		latitude: { setLatitude },
		longitude: { setLongitude },
	} = geoStore

	const onChange = (coords: IUseGeolocation): void => {
		setHaveGeo(true)
		setLatitude(coords.latitude)
		setLongitude(coords.longitude)
	}

	const onError = () => {
		console.log('геолокация выключена')
		setHaveGeo(false)
	}

	useEffect(() => {
		const geo = navigator.geolocation

		geo.getCurrentPosition((position) => onChange(position.coords), onError)
	}, [])
}
