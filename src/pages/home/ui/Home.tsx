import { haveGeoStore, latitudeStore, longitudeStore } from "@/app/store/";
import { geolocation, getWeather } from "@/features/";
import { useDebounce, useTanstackQuery } from "@/shared/lib/";
import { CityItem } from "@/widgets/city-item/";
import { Search } from "@/widgets/search/";
import { SideBar } from "@/widgets/sidebar/";
import { observer } from "mobx-react-lite";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import s from "./home.module.scss";

const CITYES = ["лондон", "набережные челны", "нью йорк", "бурж", "Москва"];

export const Home = observer(() => {
  const {
    haveGeo: { haveGeo },
  } = haveGeoStore;
  const {
    latitude: { latitude },
  } = latitudeStore;
  const {
    longitude: { longitude },
  } = longitudeStore;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inpValue, setInpValue] = useState("Москва");
  const debouncedInput = useDebounce(inpValue, 500);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const shouldFetchWeather = debouncedInput.trim() !== "" || haveGeo;

  const { data } = useTanstackQuery(
    getWeather,
    shouldFetchWeather ? debouncedInput : "Москва",
    ["weather", debouncedInput, latitude, longitude],
    {
      enabled: shouldFetchWeather,
    }
  );

  useEffect(() => {
    geolocation();
  }, []);

  if (haveGeo) setInpValue("");

  const displayData = data || {
    location: { name: "Ничего не найдено" },
    current: {
      temp_c: 0,
      humidity: 0,
      condition: { icon: "", text: "" },
      wind_mph: 0,
    },
  };

  const { location, current } = displayData;

  return (
    <section className={`${s.home_page} container`}>
      <Search inpValue={inpValue} setInpValue={setInpValue} />

      <section className={s.home_page_wrapper}>
        <section className={s.main_info}>
          <section className={s.main_info_inner}>
            <h3 className={s.city}>
              {inpValue.length || haveGeo ? location.name : "Ничего не найдено"}
            </h3>

            <p className={s.temperature}>{current.temp_c}&deg;C</p>
          </section>

          <motion.section
            transition={{ delay: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={s.cards}
          >
            <article className={s.card}>
              <img src={"/humidity.png"} alt="humidity" loading="lazy" />

              <h3>{current.humidity}%</h3>
            </article>

            <article className={s.card}>
              <img
                src={current.condition.icon}
                alt={current.condition.text}
                loading="lazy"
              />
              <p>погода</p>
            </article>

            <article className={s.card}>
              <img src={"/windy.png"} alt="speed windy" loading="lazy" />
              <p>{current.wind_mph}mph</p>
            </article>
          </motion.section>
        </section>
        <button
          className={s.open_sidebar}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          &gt;
        </button>
        {isDesktop && (
          <SideBar>
            {CITYES.map((item) => (
              <CityItem item={item} key={item} />
            ))}
          </SideBar>
        )}

        {isSidebarOpen && !isDesktop && (
          <SideBar>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>X</button>
            {CITYES.map((item) => (
              <CityItem item={item} key={item} />
            ))}
          </SideBar>
        )}
      </section>
    </section>
  );
});
