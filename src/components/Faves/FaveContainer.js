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

	return <FaveItem fave={fave} key={nanoid()} />
}
export default FaveItem
