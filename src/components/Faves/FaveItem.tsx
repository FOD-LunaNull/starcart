import { SyntheticEvent } from 'react'
import { Button, ButtonProps, List, Rating } from 'semantic-ui-react'

interface FaveItemProps {
	handleRemove: (_e: SyntheticEvent, data: ButtonProps) => void
	fave: any
	handleRating: any
}

const FaveItem = ({ fave, handleRating, handleRemove }: FaveItemProps): JSX.Element => (
	<List.Item>
		<img src="avatar.jpg" alt="avatar" />
		<List.Content>
			{fave.name} <Button onClick={handleRemove} size="mini" icon={{ name: 'delete', color: 'red' }} basic />
		</List.Content>
		<List.Content>
			<Rating onRate={handleRating} maxRating={5} icon="star" size="mini" rating={fave.rating} />
		</List.Content>
	</List.Item>
)

export default FaveItem
