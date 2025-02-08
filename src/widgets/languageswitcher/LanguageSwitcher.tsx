import { useTranslation } from "react-i18next";
import s from "./ui/languageswitcher.module.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      className={s.switcher_block}
      title="смена языка"
    >
      <option value={"ru"} className={s.switcher}>
        russian
      </option>
      <option value={"en"} className={s.switcher}>
        english
      </option>
      <option value={"ja"} className={s.switcher}>
        ja
      </option>
    </select>
  );
};

export default LanguageSwitcher;
