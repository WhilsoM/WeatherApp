import { getWeather } from "@/features/";
import { useTanstackQuery } from "@/shared/lib/";
import { motion } from "motion/react";
import s from "./cityitem.module.scss";

export const CityItem = ({ item = "" }) => {
  const { data, isLoading, error } = useTanstackQuery(getWeather, item, [item]);

  if (isLoading) {
    return (
      <div className={s.different_city}>
        <div className={s.city}>
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.different_city}>
        <div className={s.city}>
          <h4>Error loading weather data</h4>
          <p>{error instanceof Error ? error.message : "Unknown error"}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.location || !data.current) {
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
        <h4>{location.name}</h4>
        <p>{current.temp_c}&deg;C</p>
      </div>

      <div className={s.weather}>
        {current.condition?.icon && (
          <img
            src={current.condition.icon}
            alt={current.condition?.text || "weather icon"}
            loading="lazy"
          />
        )}
        <p>|</p>
        <div className={s.weather_wrapper}>
          <p>{current.wind_mph}mph</p>
          <img src="/windy.png" alt="windy" loading="lazy" />
        </div>
      </div>
      <hr />
    </motion.div>
  );
};
