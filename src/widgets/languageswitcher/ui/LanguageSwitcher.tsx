import { useTranslation } from "react-i18next";
import s from "./languageswitcher.module.scss";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      className={s.switcher_block}
    >
      <option disabled className={s.switcher}>
        Выбор языка
      </option>
      <option value={"ru"} className={s.switcher}>
        русский
      </option>
      <option value={"en"} className={s.switcher}>
        английский
      </option>
      <option value={"ja"} className={s.switcher}>
        японский
      </option>
      <option value={"kz"} className={s.switcher}>
        казахский
      </option>
      <option value={"sp"} className={s.switcher}>
        испанский
      </option>
    </select>
  );
};
