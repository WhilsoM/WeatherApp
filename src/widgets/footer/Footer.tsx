import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavList } from '../nav-list/NavList';
import s from './ui/footer.module.scss';
import logo from '/logo.png';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.logo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>

        <NavList />
      </div>
    </footer>
  );
};
