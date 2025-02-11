import { IAddMemeForm } from "@/app/types/types";
import { FC } from "react";
import s from "./ui/addmemecard.module.scss";

export const AddMemeForm: FC<IAddMemeForm> = (props) => {
  const {
    handleSubmit,
    imageUrl,
    setImageUrl,
    userName,
    setUserName,
    title,
    setTitle,
    editingCard,
    setEditingCard,
  } = props;

  return (
    <>
      <form className={s.input_block} onSubmit={handleSubmit}>
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
        <button className={s.accept_button} type="submit">
          {editingCard ? "Update Meme" : "Add Meme"}
        </button>
        {editingCard && (
          <button type="button" onClick={() => setEditingCard(null)}>
            Cancel
          </button>
        )}
      </form>
    </>
  );
};
