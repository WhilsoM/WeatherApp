import s from './ui/memes.module.scss'
import AddMemeCard from '@/features/addmemecard/AddMemeCard'
import Ad from '@/features/Ad/Ad'


const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes'

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

