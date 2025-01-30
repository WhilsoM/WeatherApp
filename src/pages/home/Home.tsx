import { geolocation } from '@/features/geolocation'
import { getWeather } from '@/features/getWeather'
import { useDebounce } from '@/hooks/useDebounce'
import { haveGeoStore } from '@/store/haveGeo'
import { latitudeStore } from '@/store/latitude'
import { longitudeStore } from '@/store/longitude'
import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import s from './ui/home.module.scss'
import humidityImg from '/humidity.png'
import windyImg from '/windy.png'

interface IWeather {
	location: {
		name: string
		lat: number
		lon: number
		localtime: string
	}
	current: {
		temp_c: number
		is_day: number
		humidity: number
		condition: {
			icon: string
			text: string
		}
		wind_mph: number
	}
}

export const Home = observer(() => {
	const {
		haveGeo: { haveGeo },
	} = haveGeoStore
	const {
		latitude: { latitude },
	} = latitudeStore
	const {
		longitude: { longitude },
	} = longitudeStore

	const [inpValue, setInpValue] = useState<string>('Moscow')
	const debouncedInput = useDebounce(inpValue, 500)

	// вынести в хук tanstack query, запрос
	const { data } = useQuery<IWeather>({
		queryKey: ['weather', debouncedInput, latitude, longitude],
		queryFn: () => getWeather(inpValue),
	})

	useEffect(() => {
		geolocation()
	}, [])

	useEffect(() => {
		if (haveGeo) setInpValue('')
	}, [haveGeo])

	return (
		<section className={`${s.home_page} container`}>
			<Search inpValue={inpValue} setInpValue={setInpValue} />

			<section className={s.home_page_wrapper}>
				<SideBar />

				<section className={s.main_info}>
					<section className={s.main_info_inner}>
						<h3 className={s.city}>
							{/* 
                  юзер ввел текст - true, haveGeo - true, значит показываем город.
                  юзер не ввел текст и не дал геолокацию свою, показываем текст 'Ничего не найдено' 
              */}

							{inpValue.length || haveGeo
								? data?.location?.name
								: 'Ничего не найдено'}
						</h3>

						<p className={s.temperature}>{data?.current?.temp_c}&deg;C</p>
					</section>

					<section className={s.cards}>
						<article className={s.card}>
							<img src={humidityImg} alt='humidity' />

							<h3>{data?.current?.humidity}%</h3>
						</article>

						<article className={s.card}>
							<img
								src={data?.current?.condition?.icon}
								alt={data?.current?.condition?.text}
							/>
							<p>погода</p>
						</article>

						<article className={s.card}>
							<img src={windyImg} alt='speed windy' />
							<p>{data?.current?.wind_mph}mph</p>
						</article>
					</section>
				</section>
			</section>
		</section>
	)
})
