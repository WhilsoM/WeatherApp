import { MemeCardProps } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import { RenderMemes } from "../../render-memes";
import s from "./addmemecard.module.scss";
import { AddMemeForm } from "./meme-form/AddMemeForm";

const API_URL = "https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes";

export const AddMemeCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [editingCard, setEditingCard] = useState<MemeCardProps | null>(null);
  const queryClient = useQueryClient();
  const startSwipeY = useRef(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startSwipeY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endSwipeY = e.changedTouches[0].clientY;
    const swipeDistance = endSwipeY - startSwipeY.current;

    if (swipeDistance > 50) {
      const modalContent = document.querySelector(".modal_content");
      if (modalContent) {
        modalContent.classList.add("closing");
        setTimeout(() => {
          closeModal();
        }, 300); // Время анимации
      }
    }
  };

  const {
    data: memeCards = [],
    isLoading,
    isError,
  } = useQuery<MemeCardProps[]>({
    queryKey: ["memes"],
    queryFn: async (): Promise<MemeCardProps[]> => {
      const response = await axios.get<MemeCardProps[]>(API_URL);
      return response.data;
    },
  });

  const addMemeMutation = useMutation({
    mutationFn: async (newMemeCard: Omit<MemeCardProps, "id">) => {
      const response = await axios.post<MemeCardProps>(API_URL, newMemeCard);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
      setImageUrl("");
      setUserName("");
      setTitle("");
    },
    onError: () => {
      console.error("Ты опоздал юзер, я съел твой мем!");
    },
  });

  const deleteMemeMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
    },
    onError: () => {
      console.error("Мем в покер не проебался, сори(((");
    },
  });

  const updatedMemeMutation = useMutation({
    mutationFn: async (updatedMemeCard: MemeCardProps) => {
      const response = await axios.put<MemeCardProps>(
        `${API_URL}/${updatedMemeCard.id}`,
        updatedMemeCard
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
      setEditingCard(null);
      setImageUrl("");
      setUserName("");
      setTitle("");
    },
    onError: () => {
      console.log("Мем не поменял, сорян(((");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMemeCard = {
      imageUrl,
      userName,
      createdAt: new Date().toISOString(),
      title,
    };

    if (editingCard) {
      const updatedMemeCard = {
        ...editingCard,
        imageUrl,
        userName,
        title,
      };
      updatedMemeMutation.mutate(updatedMemeCard);
    } else {
      addMemeMutation.mutate(newMemeCard);
    }
  };
  const handleDelete = (id: string) => {
    deleteMemeMutation.mutate(id);
  };

  const handleEdit = (card: MemeCardProps) => {
    setEditingCard(card);
    setImageUrl(card.imageUrl);
    setUserName(card.userName);
    setTitle(card.title);
  };

  if (isLoading) {
    return <div className={s.loader}>ГОООООООЛ!</div>;
  }

  if (isError) {
    return (
      <div className={s.loader}>
        Ты опоздал Богдан, я проебал твои мемы в покер!
      </div>
    );
  }

  return (
    <>
      <button className={s.modal_btn} onClick={openModal}>
        Создать
      </button>
      {isModalOpen && (
        <div
          className={s.modal_overlay}
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
            <div className={s.modal_header}>
              <p>Создать мем</p>
              <p className={s.modal_cls_btn} onClick={closeModal}>
                &#10006;
              </p>
            </div>
            <AddMemeForm
              handleSubmit={(e) => handleSubmit(e)}
              editingCard={editingCard}
              imageUrl={imageUrl}
              setEditingCard={setEditingCard}
              setImageUrl={setImageUrl}
              setTitle={setTitle}
              setUserName={setUserName}
              title={title}
              userName={userName}
            />
          </div>
        </div>
      )}
      <section>
        <RenderMemes
          memeCards={memeCards}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </section>
    </>
  );
};
