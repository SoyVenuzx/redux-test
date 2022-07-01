import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export const Counter = () => {
	return (
		<Container className='mt-5 bg-dark p-5 rounded-4'>
			<h1 className='text-center text-white'>Amount ...</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '2em',
					marginTop: '1.5em',
				}}
			>
				<div>
					<Button
						className='bg-white text-dark text-uppercase fw-bold'
						style={{
							fontSize: 10,
						}}
					>
						Deposito $10
					</Button>
				</div>

				<div>
					<Button
						className='bg-white text-dark text-uppercase fw-bold'
						style={{ fontSize: 10 }}
					>
						Withdraw $10
					</Button>
				</div>
			</div>
		</Container>
	);
};
