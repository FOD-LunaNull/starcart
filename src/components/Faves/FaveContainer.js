import { useDispatch } from 'react-redux'
import { removeFave } from '../../features/faves'
import FaveItem from './FaveItem'
const FaveContainer = ({ fave }) => {
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
		dispatch(removeFave(fave.id))
	}

	return <FaveItem fave={fave} handleRating={handleRating} handleRemove={handleRemove} />
}
export default FaveContainer
