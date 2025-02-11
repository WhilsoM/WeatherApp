import { useTranslation } from "react-i18next";
import s from "./ui/about.module.scss";
import artgod from "/artgod.jpg";
import me from "/me.jpg";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={s.main}>
      <div className={s.main_info}>
        <div className={s.main_info_first}>
          <h1 className={s.main_info_title}>{t("about.team")}</h1>
        </div>
        <div className={s.main_info_second}>
          <img className={s.main_info_img} src={artgod} alt="Артур" />
          <div className={s.main_info_text_block}>
            <h2 className={s.main_info_title}>{t("about.artur.name")}</h2>
            <p className={s.main_info_text_block}>{t("about.artur.role")}</p>
            <p>{t("about.artur.tg")}</p>
            <p>{t("about.artur.ds")}</p>
            <p>{t("about.artur.email")}</p>
          </div>
        </div>
        <div className={s.main_info_third}>
          <div className={s.main_info_text_block}>
            <h2 className={s.main_info_title}>{t("about.bogdan.name")}</h2>
            <p className={s.main_info_text_block}>{t("about.bogdan.role")}</p>
            <p>{t("about.bogdan.tg")}</p>
            <p>{t("about.bogdan.ds")}</p>
            <p>{t("about.bogdan.email")}</p>
          </div>
          <img className={s.main_info_img} src={me} alt="Богдан" />
        </div>
      </div>
    </section>
  );
};
