import { Ad } from "@/widgets/Ad/";
import { AddMemeCard } from "@/widgets/addmemecard/";
import { observer } from "mobx-react-lite";
import s from "./memes.module.scss";

const Memes = observer(() => {
  return (
    <section className="container">
      <div className={s.main_info}>
        <div className={s.main_info__wrapper}>
          <div className={s.block}>
            <div className={s.ad}>
              <Ad />
            </div>
          </div>
        </div>
        <AddMemeCard />
      </div>
    </section>
  );
});

export default Memes;
