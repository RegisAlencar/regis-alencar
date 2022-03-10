import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import React, { useContext } from 'react'
import cartContext from '../context/'

const InformationPage = () => {
	const { setCartItems, cartItems } = useContext(cartContext)
	const { name } = useParams()
	const nameLower = name.toLowerCase()
	const fruit = useRequestData(
		[],
		`https://labenu-cors-proxy.herokuapp.com/?url=https://www.fruityvice.com/api/fruit/${nameLower}?min=0&max=1000)`
	)
	//console.log(fruit)

	function addToCart(fruit) {
		if (cartItems.find((item) => item.name === fruit.name)) {
			const itemIndex = () => {
				for (let chave in cartItems) {
					if (
						cartItems[chave].name === fruit.name &&
						cartItems.hasOwnProperty(chave)
					) {
						return chave
					}
				}
			}
			let item = itemIndex()
			cartItems[`${item}`].quantity += 1
		} else {
			setCartItems((oldArray) => [
				...oldArray,
				{ name: fruit.name, quantity: 1 },
			])
		}
	}

	return (
		<>
			{fruit.nutritions && (
				<div>
					<h1> Nutritional Information </h1>
					<h3>{fruit.name}</h3>
					{Object.keys(fruit.nutritions).map((item, index) => {
						return (
							<p key={index}>
								{item}: {fruit.nutritions[`${item}`]}
							</p>
						)
					})}
					<button onClick={() => addToCart(fruit)}> Buy </button>
				</div>
			)}
		</>
	)
}

export default InformationPage
