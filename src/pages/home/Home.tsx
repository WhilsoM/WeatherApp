import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import s from './ui/home.module.scss'


export const Home = () => {
	return (
		<section className='container'>
			<Search />			
			<section className={s.home_page}>
				<SideBar />
					<p></p>
				<article className={s.main_info}>Основная информация</article>
			</section>
		</section>
	)
}
