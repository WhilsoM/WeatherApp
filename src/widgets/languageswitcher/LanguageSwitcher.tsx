import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './ui/languageswitcher.module.scss'
import strong from '/USSR.png'
import shit from '/shit.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={s.switcher_block}>
      <button className={s.switcher} onClick={() => changeLanguage('ru')}><img className={s.img} src={strong} alt="USSR" /></button>
      <button className={s.switcher} onClick={() => changeLanguage('en')}><img className={s.img} src={shit} alt="pindosia" /></button>
    </div>
  );
};

export default LanguageSwitcher;