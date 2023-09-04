import React from 'react'
import styles from './searchForm.module.css'

function SearchForm() {
	return (
		<div className={styles.search}>
			<form action=''>
				<label htmlFor=''>Input field</label>
				<div className={styles.main_div}>
					<input type='text' />
					<button>Search</button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm
