import React from 'react';
import s from './ui/memecard.module.scss'

export interface MemeCardProps {
  imageUrl: string;
  userName: string;
  createdAt: string;
  title: string;
}

const MemeCard: React.FC<MemeCardProps> = ({ imageUrl, userName, createdAt, title }) => {
  return (
  <section className={s.card}>  
      <div className={s.card_wrap}>
    <img className={s.card_img} src={imageUrl} alt="Meme" style={{ width: '20%', height: 'auto' }} />
    <h3 className={s.card_txt}>{title}</h3>
    <h3 className={s.card_txt}>{userName}</h3>
    <p>Created at: {new Date(createdAt).toLocaleDateString()}</p>
  </div>
</section>
  );
};

export default MemeCard;