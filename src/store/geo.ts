import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

interface GeoStore {
	haveGeo: {
		haveGeo: boolean
		setHaveGeo: (value: boolean) => void
	}
	latitude: {
		latitude: number
		setLatitude: (value: number) => void
	}
	longitude: {
		longitude: number
		setLongitude: (value: number) => void
	}
}

class HaveGeo {
	constructor() {
		makeAutoObservable(this)
	}

	haveGeo = mobxState(false)('haveGeo')
	latitude = mobxState(0)('latitude')
	longitude = mobxState(0)('longitude')
}

export const geoStore: GeoStore = new HaveGeo()
