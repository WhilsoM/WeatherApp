import { IRenderMemes } from "@/app/types/types";
import { FC } from "react";
import MemeCard from "../MemeCard/MemeCard";
import s from "./ui/rendermemes.module.scss";

export const RenderMemes: FC<IRenderMemes> = ({
  memeCards,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      {memeCards.map((card: any, index: number) => (
        <div key={index}>
          <MemeCard
            id={card.id}
            imageUrl={card.imageUrl}
            userName={card.userName}
            createdAt={card.createdAt}
            title={card.title}
          />
          <div className={s.button_block}>
            <button onClick={() => handleEdit(card)}>Edit</button>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};
