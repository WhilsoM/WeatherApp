import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import s from "./header.module.scss";
import { LanguageSwitcher } from "./languageswitcher/LanguageSwitcher";
import { NavList } from "./nav-list/NavList";
import { LinkToProfile } from "./profile/LinkToProfile";

export const Header = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

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

        {isDesktop && <NavList />}
        {isDesktop && <LanguageSwitcher />}
        {isDesktop && <LinkToProfile />}

        <BurgerMenu />
      </div>
    </motion.header>
  );
};
