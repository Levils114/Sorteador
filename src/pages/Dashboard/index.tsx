import React, { useState, FormEvent } from 'react';

import { Container, MainContainer } from './styles';



const Dashboard: React.FC = () => {

	const [ inputNames, setInputNames ] = useState('');
	const [ names, setNames ] = useState<string[]>([]);
	const [ winnerName, setWinnerName ] = useState('');

	async function handleAddName(event: FormEvent<HTMLFormElement>): Promise<void>{

		event.preventDefault();

		const name = inputNames;
		setNames([...names, name]);
		
		setInputNames('');
	}

	async function handleSortear(): Promise<void>{
		

		const randomName = names[Math.floor(Math.random() * names.length)];

		setWinnerName(randomName);
	}


	return (
		<>
			<MainContainer>
				<Container>
					

					<h1>Sorteador</h1>

					{ winnerName && (
							<p>O nome sorteado foi: {winnerName}</p>
						) }

					<form onSubmit={handleAddName}>
						<input placeholder="Name" value={inputNames} onChange={(e) => setInputNames(e.target.value)}/>
						<button type="submit">Enviar</button>
					</form>

					<button onClick={handleSortear}>Sortear</button>


					
				</Container>


					{ names.map(name => (
							<p>{name}</p>
						)) }
			</MainContainer>
		</>
		);
}

export default Dashboard;