import { TWeather } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useTanstackQuery = (
  callbackFn: (arg: string) => Promise<TWeather>,
  arg: string,
  ...keys: any[]
) => {
  const { data, isLoading, error } = useQuery<TWeather>({
    queryKey: [...keys],
    queryFn: () => callbackFn(arg),
  });

  return { data, isLoading, error };
};
