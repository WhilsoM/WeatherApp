import { ISearch } from "@/app/types/types";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import s from "./ui/search.module.scss";

export const Search = ({ inpValue, setInpValue }: ISearch) => {
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
