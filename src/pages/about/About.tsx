import s from './ui/about.module.scss'

export const About = () => {
  return (
<section className={`${s.about_us} container`}>
    <div className={s.main_info}>
        <h2 className={s.main_title}>Команда Воркеров</h2>
        <div className={s.developer}>
            <p className={s.main_text}>Артур Ахметов</p>
            <div className={s.main_num_block}>
                <p className={s.main_text}>Номер: 88005553535</p>
                <p className={s.main_text}>Дс: mooonw_12299</p>
                <p className={s.main_text}>email: </p>
            </div> 
        </div>
        <div className={s.dick_sucker}>
            <p className={s.main_text}>Богдан Зенков</p>
            <div className={s.main_num_block}>
                <p className={s.main_text}>Номер: 89510611913</p>
                <p className={s.main_text}>Дс: tamimasabas</p>
                <p className={s.main_text}>email: zenbogdan2008@gmail.com</p>
            </div> 
        </div>
        
    </div>
 </section>
  )
}