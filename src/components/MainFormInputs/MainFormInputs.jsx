import React, { useEffect, useState } from 'react'
import styles from './mainFormInputs.module.css'
import { useApp } from '../../contexts/appContext'
function MainFormInputs() {
   const {addCoin} = useApp()

	const [datas, setDatas] = useState({})

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setDatas((prevDatas) => ({
			...prevDatas,
			[name]: value,
		}))
	}

   
	return (
		<div>
			<form className={styles.form} onSubmit={(e) => addCoin(e, datas)} action=''>
				<div>
					<div>
						<label htmlFor=''>Coin name</label>
						<input onChange={handleInputChange} name='name' type='text' />
					</div>

					<div>
						<label htmlFor=''>Face value</label>
						<input onChange={handleInputChange} name='faceValue' type='text' />
					</div>

					<div>
						<label htmlFor=''>Year of issue</label>
						<input onChange={handleInputChange} name='year' type='text' />
					</div>

					<div>
						<label htmlFor=''>Price</label>
						<input onChange={handleInputChange} name='price' type='text' />
					</div>
					<div>
						<label htmlFor=''>Country</label>
						<input onChange={handleInputChange} name='country' type='text' />
					</div>

					<div>
						<label htmlFor=''>Metal</label>
						<input onChange={handleInputChange} name='metal' type='text' />
					</div>
				</div>

				<div>
					<div>
						<label htmlFor=''>Short description</label>
						<textarea onChange={handleInputChange} name='shortD'></textarea>
					</div>

					<div>
						<label htmlFor=''>Long description</label>
						<textarea onChange={handleInputChange} name='longD'></textarea>
					</div>

					<div>
						<label htmlFor=''>Quality of the coin</label>
						<input onChange={handleInputChange} name='quality' type='text' />
					</div>
					<div>
						<label htmlFor=''>Weight</label>
						<input onChange={handleInputChange} name='weight' type='text' />
					</div>
				</div>
				<div>
					<div>
						<label htmlFor=''>Link to obverse image</label>
						<input onChange={handleInputChange} name='observe' type='text' />
					</div>

					<div>
						<label htmlFor=''>Link to reverse image</label>
						<input onChange={handleInputChange} name='reverse' type='text' />
					</div>

               <div>
                  <button type='submit'>ss</button>
               </div>
				</div>
			</form>
		</div>
	)
}

export default MainFormInputs
