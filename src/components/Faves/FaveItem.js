import { Button, Image, List } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeFave, updateFave, rateFave } from '../../features/faves'
import { nanoid } from '@reduxjs/toolkit'

const FaveItem = ({ fave }) => {
	const dispatch = useDispatch()
	/* 
    ? dispatch the action from the faves features slice to update the rating of the selected fave
    */
	const handleRating = e => {
		/* 
? set a rating
 */ console.log(e.currentTarget.dataset)
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
				{/*
                    these ratings need to toggle that star rating when user toggles that star  
                    -- 💡 there is a <Ratings/> component 
                    -- 💡 onRate method will give num of active icons
                    
                    */}
				{Array.from({ length: Number(fave.rating) }).map((rating, index) => {
					return (
						<button key={nanoid()} data-rating={index + 1} onClick={handleRating}>
							⭐
						</button>
					)
				})}
			</List.Content>
		</List.Item>
	)
}
export default FaveItem
