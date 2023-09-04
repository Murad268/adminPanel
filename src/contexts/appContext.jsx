import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const AppContext = createContext()
import { useNavigate } from 'react-router-dom'
export const AppContextProvider = ({ children }) => {
	const [coins, setCoins] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	async function addData(url, data) {
		const response = await fetch(`http://localhost:3004/${url}`)
		const existingData = await response.json()
		const isDataExists = existingData.some((item) => item.el === data)

		if (!isDataExists) {
			const newData = { el: data, id: Date.now() }
			await fetch(`http://localhost:3004/${url}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newData),
			})
		} 
	}

	function deleteData(id) {
		fetch(`http://localhost:3004/coins/${id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			if (response.ok) {
				getData('http://localhost:3004/coins').then((res) => setCoins(res))
				toast('Coin was deleted successfully')
			} else {
				console.error(`Failed to delete item with ID ${id}.`)
			}
		})
	}

	useEffect(() => {
		setIsLoading(true)
		getData('http://localhost:3004/coins')
			.then((res) => setCoins(res))
			.finally(setIsLoading(false))
	}, [])

	async function getData(url) {
		const res = await fetch(url)
		return await res.json()
	}

	function addCoin(e, data) {
		e.preventDefault()
		fetch('http://localhost:3004/coins', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...data, id: Date.now() }),
		}).then((res) => {
			e.target.reset()
			addData('countres', data.country)
			addData('quality', data.quality)
			addData('metal', data.metal)
			navigate('/')
			getData('http://localhost:3004/coins').then((res) => setCoins(res))
			toast('Coin was added successfully')
		})
	}

	const values = { addCoin, coins, deleteData, isLoading }
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useApp = () => {
	const context = useContext(AppContext)

	if (context === undefined) {
		throw new Error('useContacts hook must be call inside AppContextProvider')
	}
	return context
}