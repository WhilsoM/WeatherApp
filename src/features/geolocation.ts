import { haveGeoStore, latitudeStore, longitudeStore } from "@/app/store/";
import { IUseGeolocation } from "@/app/types/types";

export const geolocation = () => {
  const {
    haveGeo: { setHaveGeo },
  } = haveGeoStore;

  const {
    latitude: { setLatitude },
  } = latitudeStore;
  const {
    longitude: { setLongitude },
  } = longitudeStore;

  const onChange = (coords: IUseGeolocation): void => {
    setHaveGeo(true);

    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  };

  const onError = () => {
    console.log("геолокация выключена");
    setHaveGeo(false);
  };

  const geo = navigator.geolocation;

  return geo.getCurrentPosition(
    (position) => onChange(position.coords),
    onError
  );
};
