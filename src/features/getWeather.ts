import { haveGeoStore, latitudeStore, longitudeStore } from "@/store";
import { IWeather } from "@/types/types";

export const getWeather = async (city?: string) => {
  const {
    haveGeo: { haveGeo },
  } = haveGeoStore;
  const {
    latitude: { latitude },
  } = latitudeStore;
  const {
    longitude: { longitude },
  } = longitudeStore;

  const URL = `${import.meta.env.VITE_API_URL}&q=${
    haveGeo && (!city || city.length === 0) ? `${latitude},${longitude}` : city
  }`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return (await response.json()) as IWeather;
  } catch (error) {
    console.log("проблема");

    console.error(error);
    throw error;
  }
};
