import { Card, Loader, Message } from 'semantic-ui-react';
import { useGetCharactersQuery } from '../services/swapApi';
import { nanoid } from '@reduxjs/toolkit';

const Characters = () => {
	const { data, isError, isLoading } = useGetCharactersQuery();

	if (isLoading) {
		return <Loader active={isLoading} />;
	}

	if (isError) {
		return <Message error={isError}>There was an error</Message>;
	}

	if (data && Boolean(data?.results?.length)) {
		return (
			<Card.Group centered>
				{data.results.map(character => (
					<Card key={nanoid()}>
						<Card.Content>
							<Card.Header>{character.name}</Card.Header>

							{character.films && (
								<Card.Meta>Films: {character.films.length}</Card.Meta>
							)}
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		);
	} else if (data?.results?.length === 0) {
		return <Message warning>No characters found.</Message>;
	}

	return null;
};

export default Characters;
