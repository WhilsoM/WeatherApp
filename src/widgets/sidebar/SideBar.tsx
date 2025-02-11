import { RenderCityes } from "../render-cityes/RenderCityes";
import s from "./ui/sidebar.module.scss";

const CITYES = ["лондон", "набережные челны", "нью йорк"];

export const SideBar = () => {
  return (
    <aside className={s.sidebar}>
      {CITYES.map((item) => (
        <RenderCityes item={item} key={item} />
      ))}
    </aside>
  );
};
