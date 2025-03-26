import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TAdData } from "../model/";
import s from "./ad.module.scss";

const API_URL = "https://67968bd6bedc5d43a6c58fc6.mockapi.io/ad";

export const Ad = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isAdVisible, setIsAdVisible] = useState(true);

  const { data: ads = [] } = useQuery<TAdData[]>({
    queryKey: ["ads"],
    queryFn: async (): Promise<TAdData[]> => {
      const response = await axios.get<TAdData[]>(API_URL);
      return response.data;
    },
  });

  useEffect(() => {
    if (ads.length > 0) {
      const interval = setInterval(() => {
        setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [ads.length]);

  const handleCloseAd = () => {
    setIsAdVisible(false);
  };

  if (ads.length === 0 || !isAdVisible) {
    return null;
  }

  const currentAd = ads[currentAdIndex];

  return (
    <div key={currentAd.id} className={s.ad_card}>
      <img
        src={currentAd.img}
        className={s.ad_img}
        alt={currentAd.title}
        loading="lazy"
      />
      <div className={s.ad_wrapper}>
        <h2 className={s.adTitle}>{currentAd.title}</h2>
        <p className={s.adText}>{currentAd.text}</p>
        <Link to={currentAd.link}>Подробнее</Link>
      </div>
      <p onClick={handleCloseAd} className={s.closeButton}>
        &#10006;
      </p>
    </div>
  );
};
