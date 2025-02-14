import { useTanstackQuery } from "@/app/hooks/";
import { getWeather } from "@/features/";
import { motion } from "motion/react";
import s from "./cityitem.module.scss";

export const CityItem = ({ item = "" }) => {
  const { data } = useTanstackQuery(getWeather, item, [item]);

  if (!data) {
    return null;
  }

  const { location, current } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      className={s.different_city}
    >
      <div className={s.city}>
        <h4>{location?.name}</h4>
        <p>{current?.temp_c}&deg;C</p>
      </div>

      <div className={s.weather}>
        <img
          src={current?.condition?.icon}
          alt={current.condition?.text}
          loading="lazy"
        />
        <p>|</p>
        <div className={s.weather_wrapper}>
          <p>{data?.current?.wind_mph}mph</p>
          <img src="/windy.png" alt="windy" loading="lazy" />
        </div>
      </div>
      <hr />
    </motion.div>
  );
};
