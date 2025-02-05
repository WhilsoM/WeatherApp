import React from 'react';
import { NavLink } from 'react-router'; // Убедитесь, что вы используете правильный импорт
import { useTranslation } from 'react-i18next';
import s from './ui/nav-list.module.scss';

export const NavList = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={s.nav_list}>
        <li>
          <NavLink to={'/'} className={s.nav_list__link}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to={'about-us'} className={s.nav_list__link}>
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to={'memes'} className={s.nav_list__link}>
            {t('nav.memes')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};