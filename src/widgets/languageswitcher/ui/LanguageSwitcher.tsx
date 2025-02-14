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
      className={s.switcher}
    >
      <option disabled className={s.switcher__option}>
        Выбор языка
      </option>
      <option value={"ru"} className={s.switcher__option}>
        русский
      </option>
      <option value={"en"} className={s.switcher__option}>
        английский
      </option>
      <option value={"ja"} className={s.switcher__option}>
        японский
      </option>
      <option value={"kz"} className={s.switcher__option}>
        казахский
      </option>
      <option value={"sp"} className={s.switcher__option}>
        испанский
      </option>
    </select>
  );
};
