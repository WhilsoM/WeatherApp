import { getWeather } from "@/features/getWeather";
import { useTanstackQuery } from "@/hooks/useTanstackQuery";
import { useEffect } from "react";

export const RenderCityes = ({ item = "" }) => {
  const { data } = useTanstackQuery(getWeather, item, [item]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <section>
      <article>
        <h4>{data?.location?.name}</h4>
        <p>{data?.current?.temp_c}</p>
      </article>
    </section>
  );
};
