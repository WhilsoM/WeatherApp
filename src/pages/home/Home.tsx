import { getWeather } from '@/features/getWeather'
import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import { useQuery } from '@tanstack/react-query'
import s from './ui/home.module.scss'

export const Home = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['weather'],
		queryFn: getWeather,
		// select: (data) => data.data,
	})

	return (
		<section className='container'>
			<Search />

			<section className={s.home_page}>
				<SideBar />

				<article className={s.main_info}>{data?.location?.name}</article>
			</section>
		</section>
	)
}
