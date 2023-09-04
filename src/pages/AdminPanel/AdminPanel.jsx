import React from 'react'
import Title from '../../components/Title/Title'
import SearchForm from '../../components/SearchForm/SearchForm'
import Coin from '../../components/Coin/Coin'
import { useApp } from '../../contexts/appContext'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../components/Loading/Loading'
function AdminPanel() {
	const { coins } = useApp()
	return (
		<div>
			<Title title='Admin panel' />
			<SearchForm />
			<div className='panel__container flex-column'>
				<LoadingSpinner />
				{coins?.map((coin) => {
					return <Coin key={coin.id} coin={coin} />
				})}

				<Link to='/add' className='add__coin' href=''>
					<div className='add__block flex-center'>+</div>
					<span>Add a new coin</span>
				</Link>
			</div>
		</div>
	)
}

export default AdminPanel
