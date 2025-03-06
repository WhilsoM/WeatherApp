import { MemeCard } from "../../MemeCard/MemeCard";
import { TRenderMemes } from "../model/";
import s from "./rendermemes.module.scss";

export const RenderMemes = ({
  memeCards,
  handleEdit,
  handleDelete,
}: TRenderMemes) => {
  return (
    <>
      {memeCards.map((card: any, index: number) => (
        <article className={s.memeCard} key={index}>
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
        </article>
      ))}
    </>
  );
};
