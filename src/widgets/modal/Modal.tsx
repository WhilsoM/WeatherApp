import { IModal } from "@/app/types/types";
import { FC } from "react";
import s from "./ui/modal.module.scss";

export const Modal: FC<IModal> = ({ children, handleClick }) => {
  return (
    <div className={s.modal}>
      <button className={s.modal_close} onClick={handleClick}>
        X
      </button>
      <div className={s.modal__wrapper}>{children}</div>
    </div>
  );
};
