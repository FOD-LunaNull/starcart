import { Header, Icon } from 'semantic-ui-react'
import SearchApi from './SearchApi'

const Search = () => (
	<>
		<Header icon inverted>
			<Icon name="search" inverted />
			Search
		</Header>
		<SearchApi />
	</>
)
export default Search
