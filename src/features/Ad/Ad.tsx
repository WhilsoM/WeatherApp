import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import s from './ui/ad.module.scss'

const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/ad'

interface AdData {
	id: string
	img: string
	title: string
	text: string
	link: string
}

const Ad = () => {
	const [currentAdIndex, setCurrentAdIndex] = useState(0)

	const { data: ads = [] } = useQuery<AdData[]>({
		queryKey: ['ads'],
		queryFn: async () => {
			const response = await axios.get(API_URL)
			return response.data
		},
	})

	useEffect(() => {}, []) // empty

	useEffect(() => {
		if (ads.length > 0) {
			const interval = setInterval(() => {
				setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length)
			}, 10000)

			return () => clearInterval(interval)
		}
	}, [ads.length])

	if (ads.length === 0) {
		return
	}

	const currentAd = ads[currentAdIndex]

	return (
		<div className={s.adContainer}>
			<div key={currentAd.id} className={s.ad_card}>
				<img src={currentAd.img} className={s.ad_img} alt={currentAd.title} />
				<div>
					<h2 className={s.adTitle}>{currentAd.title}</h2>
					<p className={s.adText}>{currentAd.text}</p>
					<Link to={currentAd.link}>Подробнее</Link>
				</div>
			</div>
		</div>
	)
}

export default Ad
