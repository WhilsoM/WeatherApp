import { LanguageSwitcher } from "@/widgets/languageswitcher";
import { NavList } from "@/widgets/nav-list/";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import s from "./header.module.scss";
import { LinkToProfile } from "./profile/LinkToProfile";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header className={s.header}>
      <div className={`${s.wrapper} container `}>
        <div>
          <img
            className={s.logo}
            src={"/logo.png"}
            alt={t("header.logo")}
            loading="lazy"
          />
        </div>
        <NavList />

        <LanguageSwitcher />

        <LinkToProfile />

        <BurgerMenu />
      </div>
    </motion.header>
  );
};
