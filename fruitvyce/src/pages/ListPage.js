import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import { useHistory, useParams } from 'react-router-dom'
import { goToInformation } from '../routes/coordinator'
import { Title } from '../styled/styleList'

const ListPage = () => {
	const history = useHistory()
	const list = useRequestData([], `${BASE_URL}all`)
	//console.log(list)
	const onClickCard = (name) => {
		goToInformation(history, name)
	}

	const rowList = list.map((fruit, index) => {
		return (
			<div key={index} onClick={() => onClickCard(fruit.name)}>
				<p>{fruit.name}</p>
			</div>
		)
	})

	return (
		<div>
			<Title>Product List</Title>
			{rowList}
		</div>
	)
}

export default ListPage
