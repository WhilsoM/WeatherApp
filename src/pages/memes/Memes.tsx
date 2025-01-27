import s from './ui/memes.module.scss'



export const Memes = () => {
  return (
      <section className={`${s.about_us} container`}>
    <div className={s.main_info}>
    <h2 className={s.main_title}>Ты опоздал Артур, я проебал твои мемы в покер!</h2>
      <div className={s.block_main}>
        <div className={s.block_first}>
          <div className={s.block_create}>

          </div>
          <div className={s.block_ad}>

          </div>
        </div>
        <div className={s.block_second}>
          <div>

          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
 </section>
  )
}

