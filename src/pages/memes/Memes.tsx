import s from './ui/memes.module.scss'
import AddMemeCard from '@/features/addmemecard/AddMemeCard'
import Ad from '@/features/Ad/Ad'



export const Memes = () => {
  return (
      <section className={`${s.about_us} container`}>
    <div className={s.main_info}>
      <div className={s.block_main}>

        <div className={s.block_second}>
          <div>
            <p className={s.block}><Ad /></p>
          </div>
          <div>
            <AddMemeCard />
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
 </section>
  )
}
