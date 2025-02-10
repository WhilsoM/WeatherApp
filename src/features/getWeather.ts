import { IWeather } from "@/app/types/types";
import { haveGeoStore } from "@/store/haveGeo";
import { latitudeStore } from "@/store/latitude";
import { longitudeStore } from "@/store/longitude";
/**
 * №1
 * если в поиске есть тот же город что и в доп инфе
 * то менять город на другой
 *
 *
 * № 2
 * берем из массива город, вычисляем его индекс, мы делаем запрос
 *
 * юзер ввел текст в инпут - идет проверка есть ли этот город в столбце с новой инфой
 * набер - набережные
 * CITYS.includes('набер')
 * toLowerCase()
 */

export const getWeather = async (city: string) => {
  const {
    haveGeo: { haveGeo },
  } = haveGeoStore;

  const {
    latitude: { latitude },
  } = latitudeStore;
  const {
    longitude: { longitude },
  } = longitudeStore;

  let URL = `${import.meta.env.VITE_API_URL}`;

  try {
    if (haveGeo && city.length === 0) {
      URL += `&q=${latitude},${longitude}`;
    } else {
      URL += `&q=${city}`;
    }

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: IWeather = await response.json();

    URL = `${import.meta.env.VITE_API_URL}`;

    return data;
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
};
