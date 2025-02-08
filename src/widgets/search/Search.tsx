import { ISearch } from "@/app/types/types";
import { ChangeEvent } from "react";
import s from "./ui/search.module.scss";

export const Search = ({ inpValue, setInpValue }: ISearch) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
  };

  return (
    <div className={s.search}>
      <input
        className={s.search_input}
        type="text"
        placeholder="Search..."
        value={inpValue}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
