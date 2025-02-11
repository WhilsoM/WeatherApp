import { getWeather } from "@/features/getWeather";
import { useTanstackQuery } from "@/hooks/useTanstackQuery";
import { motion } from "motion/react";
import s from "./ui/rendercity.module.scss";

export const RenderCityes = ({ item = "" }) => {
  const { data } = useTanstackQuery(getWeather, item, [item]);

  if (!data) {
    return null;
  }

  const { location, current } = data;

  return (
    <motion.article
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
        <img src={current?.condition?.icon} alt={current.condition?.text} />
        <p>|</p>
        <div className={s.weather_wrapper}>
          <p>{data?.current?.wind_mph}mph</p>
          <img src="/windy.png" alt="windy" />
        </div>
      </div>
      <hr />
    </motion.article>
  );
};
