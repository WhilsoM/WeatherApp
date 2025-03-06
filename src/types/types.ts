export type TUseGeolocation = {
  latitude: number;
  longitude: number;
};

export type TWeather = {
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
};

export type MemeCardProps = {
  id: string;
  imageUrl: string;
  userName: string;
  createdAt: string;
  title: string;
};
