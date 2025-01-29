import React, { useEffect, useState } from 'react'
import s from './ui/ad.module.scss'
import axios from 'axios';
import { Link } from 'react-router';

const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/ad'

interface AdData {
    id: string,
    img: string,
    title: string,
    text: string,
    link: string,
}

const Ad = () => {
    const [ads, setAds] = useState<AdData[]>([]);
    
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await axios.get(API_URL);
                setAds(response.data);
            }catch(error){
                console.error('Ты опоздал админ, я проебал рекламу в покер!')
            }
        };
        fetchAds();
    }, []);
  return (
    <div className={s.adContainer}>
    {ads.map((ad) => (
      <div key={ad.id} className={s.adCard}>
        <img src={ad.img} className={s.ad_img}/>
        <h2 className={s.adTitle}>{ad.title}</h2>
        <p className={s.adText}>{ad.text}</p>
        <Link to={'https://parad1st.github.io/Screamer/'}>Подробнее</Link>
      </div>
    ))}
  </div>
  )
}

export default Ad
