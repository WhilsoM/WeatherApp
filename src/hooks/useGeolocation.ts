import { useEffect, useState } from 'react'

interface IUseGeolocation {
	coords?: {
		latitude?: number
		longitude?: number
	}
}

export const useGeolocation = () => {
	const [position, setPosition] = useState<IUseGeolocation>({})

	const onChange = (coords: IUseGeolocation) => {
		setPosition(coords)
	}

	useEffect(() => {
		const geo = navigator.geolocation

		geo.getCurrentPosition((position) => onChange(position))
	}, [])

	return {
		latitude: position.coords?.latitude,
		longitude: position.coords?.longitude,
	}
}
