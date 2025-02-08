export interface IUseGeolocation {
  latitude: number;
  longitude: number;
}

export interface IWeather {
  location: {
    name: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    humidity: number;
    condition: {
      icon: string;
      text: string;
    };
    wind_mph: number;
  };
}

export interface AdData {
  id: string;
  img: string;
  title: string;
  text: string;
  link: string;
}

export interface MemeCardProps {
  id: string;
  imageUrl: string;
  userName: string;
  createdAt: string;
  title: string;
}

export interface ISearch {
  inpValue: string;
  setInpValue: (e: string) => void;
}
