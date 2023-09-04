import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppContextProvider } from './contexts/appContext'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import MainForm from './pages/MainForm/MainForm'
import AdminPanel from './pages/AdminPanel/AdminPanel'

function App() {
	return (
		<Router>
			<AppContextProvider>
				<main>
					<Routes>
						<Route path='/login' element={<AdminLogin />} />
						<Route path='/add' element={<MainForm />} />
						<Route path='/' element={<AdminPanel />} />
					</Routes>

					<ToastContainer
						position='top-right'
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</main>
			</AppContextProvider>
		</Router>
	)
}

export default App
