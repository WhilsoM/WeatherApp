import { IWeather } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";

export const useTanstackQuery = (
  callbackFn: (arg?: any) => Promise<IWeather>,
  arg?: any,
  ...keys: any[]
) => {
  const { data, isLoading, error } = useQuery<IWeather>({
    queryKey: [...keys],
    queryFn: () => callbackFn(arg),
  });

  return { data, isLoading, error };
};
