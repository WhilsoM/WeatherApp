import { haveGeoStore, latitudeStore, longitudeStore } from "@/store";
import { TWeather } from "@/types/types";

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

  const query =
    haveGeo && (!city || city.length === 0)
      ? `${latitude},${longitude}`
      : encodeURIComponent(city || "");

  const URL = `${import.meta.env.VITE_API_URL}&q=${query}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `HTTP Error: ${response.status}${
          errorData ? ` - ${JSON.stringify(errorData)}` : ""
        }`
      );
    }

    const data = await response.json();
    return data as TWeather;
  } catch (error) {
    console.error("Weather API Error:", error);
    throw error;
  }
};
