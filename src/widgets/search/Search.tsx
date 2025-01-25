import s from './ui/search.module.scss'

// add feature request to server and use debounce
export const Search = () => {
	return (
		<div className={s.search}>
			<input className={s.search_input} type='text' placeholder='Search...' />
		</div>
	)
}
