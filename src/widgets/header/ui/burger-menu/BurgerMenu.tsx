import { LanguageSwitcher } from "@/widgets/languageswitcher";
import { NavList } from "@/widgets/nav-list";
import { LinkToProfile } from "../profile/LinkToProfile";
import s from "./burgermenu.module.scss";

export const BurgerMenu = () => {
  return (
    <div className={s.burger_menu}>
      <div className={s.burger_menu__content}>
        <NavList />

        <LanguageSwitcher />

        <LinkToProfile />
      </div>
    </div>
  );
};
