import React, { useState } from 'react'
import styles from './searchForm.module.css'
import { useApp } from '../../contexts/appContext'

function SearchForm() {
	const {searchData} = useApp()
	const [value, setValue] = useState()
	return (
		<div className={styles.search}>
			<form onSubmit={(e) => searchData(e, value)} action=''>
				<label htmlFor=''>Input field</label>
				<div className={styles.main_div}>
					<input onInput={e => setValue(e.target.value)} type='text' />
					<button>Search</button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm
