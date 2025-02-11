import Ad from "@/widgets/ad/Ad";
import { AddMemeCard } from "@/widgets/add-meme-card/AddMemeCard";
import s from "./ui/memes.module.scss";

export const Memes = () => {
  return (
    <section className={`${s.about_us} container`}>
      <div className={s.main_info}>
        <div className={s.block}>
          <Ad />
        </div>
        <AddMemeCard />
      </div>
    </section>
  );
};
