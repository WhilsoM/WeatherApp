import React, { useEffect, useState } from 'react';
import s from './ui/ad.module.scss';
import axios from 'axios';
import { Link } from 'react-router';

const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/ad';

interface AdData {
    id: string,
    img: string,
    title: string,
    text: string,
    link: string,
}

const Ad = () => {
    const [ads, setAds] = useState<AdData[]>([]);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await axios.get(API_URL);
                setAds(response.data);
            } catch (error) {
                console.error('Ты опоздал админ, я проебал рекламу в покер!');
            }
        };

        fetchAds();

        const interval = setInterval(() => {
            setCurrentAdIndex(prevIndex => (prevIndex + 1) % ads.length);
        },30000);

        return () => clearInterval(interval);
    }, [ads.length]);

    if (ads.length === 0) {
        return <div className={s.loader}>ГООООООООЛ!</div>;
    }

    const currentAd = ads[currentAdIndex];

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
    );
}

export default Ad;