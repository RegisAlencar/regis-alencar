import React, { useContext } from 'react'
import cartContext from '../context/'

const CartPage = () => {
	const { cartItems, setCartItems } = useContext(cartContext)

	function removeItem(product) {
		setCartItems(cartItems.filter((item) => item.name !== product.name))
	}

	function clearCart() {
		setCartItems([])
	}

	return (
		<div>
			<h1> Cart </h1>
			<button onClick={() => clearCart()}>Remove All</button>
			{cartItems.map((item, index) => {
				return (
					<div key={index}>
						<h1>{item.name}</h1>
						<p>{item.quantity}</p>
						<button onClick={() => removeItem(item)}>Remover Item</button>
					</div>
				)
			})}
		</div>
	)
}

export default CartPage
