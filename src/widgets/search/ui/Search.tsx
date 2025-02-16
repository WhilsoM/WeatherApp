import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { TSearch } from "../model/";
import s from "./search.module.scss";

export const Search = ({ inpValue, setInpValue }: TSearch) => {
  const { t } = useTranslation();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
  };

  return (
    <div className={s.search}>
      <input
        className={s.search_input}
        type="text"
        placeholder={t("search")}
        value={inpValue}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
