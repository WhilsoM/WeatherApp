import { IWeather } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useTanstackQuery = (
  callbackFn: (arg: string) => Promise<IWeather>,
  arg: string,
  ...keys: any[]
) => {
  const { data, isLoading, error } = useQuery<IWeather>({
    queryKey: [...keys],
    queryFn: () => callbackFn(arg),
  });

  return { data, isLoading, error };
};
