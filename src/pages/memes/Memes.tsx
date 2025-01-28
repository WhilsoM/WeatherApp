import s from './ui/memes.module.scss'
import AddMemeCard from '@/features/addmemecard/AddMemeCard'


const API_URL = 'https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes'

export const Memes = () => {
  return (
      <section className={`${s.about_us} container`}>
    <div className={s.main_info}>
      <div className={s.block_main}>
        <div className={s.block_first}>
          <div className={s.block_create}>

          </div>
          <div className={s.block_ad}>

          </div>
        </div>
        <div className={s.block_second}>
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

