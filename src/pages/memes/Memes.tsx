import Ad from "@/features/Ad/Ad";
import { AddMemeCard } from "@/features/addmemecard/AddMemeCard";
import s from "./ui/memes.module.scss";

export const Memes = () => {
  return (
    <section className={`${s.about_us} container`}>
      <div className={s.main_info}>
        <div className={s.block_main}>
          <div className={s.block_second}>
            <div>
              <div className={s.block}>
                <Ad />
              </div>
            </div>
            <div>
              <AddMemeCard />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
