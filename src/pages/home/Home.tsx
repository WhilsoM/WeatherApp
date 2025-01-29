import { getWeather } from '@/features/getWeather'
import { useDebounce } from '@/hooks/useDebounce'
import { useGeolocation } from '@/hooks/useGeolocation'
import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import s from './ui/home.module.scss'

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
	}
	wind_mph: number
}

export const Home = observer(() => {
	const [inpValue, setInpValue] = useState<string>('Mosc')
	const debouncedInput = useDebounce(inpValue, 1000)
	const { latitude, longitude } = useGeolocation()

	const { data } = useQuery<IWeather>({
		queryKey: ['weather', debouncedInput, latitude, longitude],
		queryFn: () => getWeather(inpValue),
	})

	useEffect(() => {
		if (debouncedInput) {
		}
	}, [debouncedInput])

	return (
		<section className={`${s.home_page} container`}>
			<Search inpValue={inpValue} setInpValue={setInpValue} />

			<section className={s.home_page_wrapper}>
				<SideBar />

				<article className={s.main_info}>
					<div>
						<h3 className={s.city}>
							{inpValue.length < 3 ? 'Ничего не найдено' : data?.location?.name}
						</h3>
						<div>
							<p>lat: {data?.location?.lat}</p>
							<p>lon: {data?.location?.lon}</p>
						</div>
						<p className={s.temperature}>{data?.current?.temp_c}&deg;C</p>
					</div>

					<div className={s.cards}>
						<div className={s.card}>ВЛАЖНОСТЬ: {data?.current?.humidity}%</div>
						<div className={s.card}>
							<img
								src={data?.current?.condition?.icon}
								alt={data?.current?.condition?.text}
							/>
						</div>
						<div className={s.card}>
							<h2>СКОРОСТЬ ВЕТРА</h2>
							<p>{data?.wind_mph}mph</p>
						</div>
					</div>
				</article>
			</section>
		</section>
	)
})
