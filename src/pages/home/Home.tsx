import { getWeather } from '@/features/getWeather'
import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import { useQuery } from '@tanstack/react-query'
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
			wind_mph: number
		}
	}
}

export const Home = () => {
	const { data } = useQuery<IWeather>({
		queryKey: ['weather'],
		queryFn: getWeather,
	})

	return (
		<section className={`${s.home_page} container`}>
			<Search />

			<section className={s.home_page_wrapper}>
				<SideBar />

				<article className={s.main_info}>
					<div>
						<h3 className={s.city}>{data?.location?.name}</h3>
						<p className={s.temperature}>{data?.current.temp_c}&deg;C</p>
					</div>

					<div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</article>
			</section>
		</section>
	)
}
