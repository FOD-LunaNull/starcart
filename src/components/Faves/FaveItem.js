import { Button, Image, List, Rating } from 'semantic-ui-react'

const FaveItem = ({ fave, handleRating, handleRemove }) => (
	<List.Item data-id={fave.id}>
		<Image avatar src="avatar.jpg" />
		<List.Content>
			{fave.name} <Button onClick={handleRemove} size="mini" icon={{ name: 'delete', color: 'red' }} basic />
		</List.Content>
		<List.Content>
			<Rating onRate={handleRating} maxRating={5} icon="star" size="mini" rating={fave.rating} />
		</List.Content>
	</List.Item>
)

export default FaveItem
