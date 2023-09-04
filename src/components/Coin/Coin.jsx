import React from 'react'
import styles from './coin.module.css'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useApp } from '../../contexts/appContext'
function Coin({coin}) {
	const {deleteData} = useApp()
	const submit = () => {
		confirmAlert({
		  title: 'element will be deleted',
		  message: 'Are you sure?',
		  buttons: [
			 {
				label: 'Yes',
				onClick: () => deleteData(coin.id)
			 },
			 {
				label: 'No',
			 }
		  ]
		})
	};
	return (
		<div className={styles.coin}>
			<div className={styles.coin__photo}>
				<img
					src={coin.observe}
					alt=''
				/>
			</div>
			<div className='coin__center'>
				<h6 className={styles.coin__center__title}>C{coin.name}</h6>
				<p>
					{coin.shortD}
				</p>
			</div>
			<div className={styles.coin__controlls}>
				<a className='coin__controlls__exit flex-center'>Edit</a>
				<a onClick={() => submit()} className='coin__controlls__delete flex-center'>Delete</a>
			</div>
		</div>
	)

}
export default Coin
