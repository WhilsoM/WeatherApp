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
  const [editingCard, setEditingCard] = useState<MemeCardProps | null>(null);

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

  const handleEdit = (card: MemeCardProps) => {
    setEditingCard(card);
    setImageUrl(card.imageUrl);
    setUserName(card.userName);
    setTitle(card.title);
  }

  const handleUpdate = async(e: React.FormEvent) => {
    e.preventDefault();

    if (!editingCard) return;

    const updateMemeCard = {
      ...editingCard,
      imageUrl,
      userName,
      title
    }

    try{
      const response = await axios.put(`${API_URL}/${editingCard.id}`, updateMemeCard);
      setMemeCards(memeCards.map(card => card.id === editingCard.id ? response.data : card));
      setEditingCard(null);
      setImageUrl('');
      setUserName('');
      setTitle('');
    } catch (error) {
      console.log('Мем не поменял, сорян(((', error);
    }
  }



  return (
    <div className='qwe'>
      <form className={s.input_block} onSubmit={editingCard ? handleUpdate : handleSubmit}>
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
        <button type="submit">{editingCard ? 'Update Meme Card' : 'Add Meme Card'}</button>
        {editingCard && <button type="button" onClick={() => setEditingCard(null)}>Cancel</button>}
      </form>

      <div className={s.qwer}>
        {memeCards.map((card, index) => (
          <div key={index}>
            <MemeCard id={card.id} imageUrl={card.imageUrl} userName={card.userName} createdAt={card.createdAt} title={card.title} />
            <button onClick={() => handleEdit(card)}>Edit</button>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMemeCard;