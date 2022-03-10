import Router from './routes/Router'
import cartContext from './context/'
import { useState } from 'react'

const App = () => {
	const [cartItems, setCartItems] = useState([])

	return (
		<cartContext.Provider value={{ cartItems, setCartItems }}>
			<div>
				<Router />
			</div>
		</cartContext.Provider>
	)
}

export default App
