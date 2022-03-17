import { useSelector } from 'react-redux'
import { List, Message } from 'semantic-ui-react'
import { selectFaveState } from '../../features/faves'
import FaveItem from './FaveItem'

const Faves = () => {
	const faves = useSelector(selectFaveState)
	if (!faves) {
		return <Message header="no faves" />
	}
	return (
		<List horizontal divided>
			{faves.map(fave => (
				<FaveItem key={fave.id} fave={fave} />
			))}
		</List>
	)
}

export default Faves
