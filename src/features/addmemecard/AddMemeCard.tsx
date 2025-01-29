import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemeCard, { MemeCardProps } from '../MemeCard/MemeCard';
import s from './ui/addmemecard.module.scss'

const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes'

const AddMemeCard: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('')
  const [memeCards, setMemeCards] = useState<MemeCardProps[]>([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get(API_URL);
        setMemeCards(response.data);
      } catch (error) {
        console.error('Ты опоздал Артур, я проебал твои мемы в покер!', error);
      }
    };

    fetchMemes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMemeCard = {
      imageUrl,
      userName,
      createdAt: new Date().toISOString(),
      title,
    };

    try {
      const response = await axios.post(API_URL, newMemeCard);
      setMemeCards([...memeCards, response.data]);
      setImageUrl('');
      setUserName('');
      setTitle('')
    } catch (error) {
      console.error('Ты опоздал юзер, я съел твой мем!', error);
    }
  };

  const handleDelete = async(id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMemeCards(memeCards.filter(card => card.id !== id));
    } catch (error){
      console.log('Мем в покер не проебался, сори(((', error)
    }
  }

  return (
    <div className='qwe'>
      <form onSubmit={handleSubmit}>
        <input
          className={s.card_img}
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add Meme Card</button>
      </form>

      <div className={s.qwer}>
      {memeCards.map((card, index) => (
  <div key={index}>
    <MemeCard id={card.id} imageUrl={card.imageUrl} userName={card.userName} createdAt={card.createdAt} title={card.title} />
    <button onClick={() => handleDelete(card.id)}>Delete</button>
  </div>
))}
      </div>
    </div>
  );
};

export default AddMemeCard;