import { MemeCardProps } from "@/app/types/types";
import { Ad } from "@/widgets/Ad/Ad";
import { AddMemeForm } from "@/widgets/addmemecard/AddMemeForm";
import { Modal } from "@/widgets/modal/Modal";
import { RenderMemes } from "@/widgets/render-memes/RenderMemes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import s from "./ui/memes.module.scss";

const API_URL = "https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes"; // вынести в папку constants

export const Memes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const [imageUrl, setImageUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [editingCard, setEditingCard] = useState<MemeCardProps | null>(null);
  const queryClient = useQueryClient();

  const {
    data: memeCards = [],
    isLoading,
    isError,
  } = useQuery<MemeCardProps[]>({
    queryKey: ["memes"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  });

  const addMemeMutation = useMutation({
    mutationFn: (newMemeCard: Omit<MemeCardProps, "id">) =>
      axios.post(API_URL, newMemeCard),
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
    mutationFn: (id: string) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
    },
    onError: () => {
      console.error("Мем в покер не проебался, сори(((");
    },
  });

  const updatedMemeMutation = useMutation({
    mutationFn: (updatedMemeCard: MemeCardProps) =>
      axios.put(`${API_URL}/${updatedMemeCard.id}`, updatedMemeCard),
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
    setIsOpen(true);
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
    <section className="container">
      <div className={s.main_info}>
        <div className={s.main_info__wrapper}>
          <div className={s.block}>
            <button onClick={handleClick}>добавить мем</button>
            <div className={s.ad}>
              <Ad />
            </div>
          </div>

          {isOpen && (
            <Modal handleClick={handleClick}>
              <AddMemeForm
                handleClick={handleClick}
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
            </Modal>
          )}
        </div>

        <section>
          <RenderMemes
            memeCards={memeCards}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </section>
      </div>
    </section>
  );
};
