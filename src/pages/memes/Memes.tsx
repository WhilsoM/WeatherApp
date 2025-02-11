import Ad from "@/widgets/Ad/Ad";
import { AddMemeCard } from "@/widgets/addmemecard/AddMemeCard";
import { Modal } from "@/widgets/modal/Modal";
import { useState } from "react";
import s from "./ui/memes.module.scss";

export const Memes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={`${s.about_us} container`}>
      <div className={s.main_info}>
        <div className={s.block}>
          <Ad />
        </div>

        <button onClick={handleClick}>добавить мем</button>

        {isOpen && (
          <Modal handleClick={handleClick}>
            <AddMemeCard />
          </Modal>
        )}
      </div>
    </section>
  );
};
