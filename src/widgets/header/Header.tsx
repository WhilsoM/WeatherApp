import { NavLink } from 'react-router'
import s from './ui/header.module.scss'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={`container ${s.wrapper}`}>
				<div>logo</div>

				<nav>
					<ul className={s.nav_list}>
						<li>
							<NavLink to={'/'} className={s.nav_list__link}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={'about-us'} className={s.nav_list__link}>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink to={'mems'} className={s.nav_list__link}>
								Mems
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className={s.user}>
					<div className={s.info_user}>
						<p className={s.username}>artbog</p>
						<p className={s.email}>artgod@gmail.com</p>
					</div>

					<div className='avatar'>avatar</div>
				</div>
			</div>
		</header>
	)
}
