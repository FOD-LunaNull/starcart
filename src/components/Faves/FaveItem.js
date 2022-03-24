import { Button, Image, List, Rating } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeFave, updateFave, rateFave } from '../../features/faves'
import { nanoid } from '@reduxjs/toolkit'

const FaveItem = ({ fave }) => {
	const dispatch = useDispatch()
	/* 
    ? dispatch the action from the faves features slice to update the rating of the selected fave
    */
	const handleRating = (_e, data) => {
		/* 
	? set a rating
	*/ console.log('rating data ', data)
	}
	const handleRemove = () => {
		/* 
	 ? remove the Fave from the list here:
	 */
		dispatch(removeFave())
	}

	return (
		<List.Item data-id={fave.id}>
			<Image avatar src="avatar.jpg" />
			<List.Content>
				{fave.name} <Button onClick={handleRemove} size="mini" icon={{ name: 'delete', color: 'red' }} basic />
			</List.Content>
			<List.Content>
				<Rating onRate={handleRating} key={nanoid()} maxRating={5} icon="star" size="mini" rating={fave.rating} />
			</List.Content>
		</List.Item>
	)
}
export default FaveItem
