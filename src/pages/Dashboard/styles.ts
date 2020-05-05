import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
  	align-items: center;
  	justify-content: center;
  	margin-top: 120px;
  	flex-direction: column;  	
`

export const Container = styled.div`

	display: flex;
  	align-items: center;
  	justify-content: center;
	max-width: 400px;
	width: 400px;
	height: 500px;

	
	flex-direction: column;
	background: #e8e6e6; 
	border-radius: 50px;

	h1{
		color: #262626;
	}

	form{
		display: flex;
  		align-items: center;
  		justify-content: center;
  		flex-direction: column;

		input{
			max-width: 500px;
			width: 320px;
			height: 50px;
			background: #262626;
			border: 0;
			border-radius: 16px;
			color: #e8e6e6;

			&::placeholder{
				color: #6e6e6e;
			}	
		}

		button{
			max-width: 500px;
			width: 320px;
			color: #e8e6e6;
			height: 50px;
			border-radius: 16px;
			margin-top: 8px;

			border: 0;

			background: #5b43f7;	

			&:hover{
				opacity: 0.9;
			}
		}
	}

	> button{
		max-width: 500px;
		width: 320px;
		margin-top: 16px;
		color: #e8e6e6;
		height: 50px;
		border-radius: 16px;

		border: 0;

		background: #5b43f7;

		&:hover{
				opacity: 0.9;
			}
	}

	

	p{
		color: #262626;
		margin-bottom: 10px;
		display: flex;
  		align-items: center;
  		justify-content: center;
  		font-size: 24px;
	}
`