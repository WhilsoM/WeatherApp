import { RenderCityes } from "../render-cityes/RenderCityes";
import s from "./ui/sidebar.module.scss";

const CITYES = ["лондон", "набережные челны", "нью йорк"];

export const SideBar = () => {
  return (
    <aside className={s.sidebar}>
      <section>
        {CITYES.map((item) => (
          <RenderCityes item={item} key={item} />
        ))}
      </section>
    </aside>
  );
};
