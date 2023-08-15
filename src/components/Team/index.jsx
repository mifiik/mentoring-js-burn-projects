import { useEffect, useReducer } from 'react';
import { USERS_LIST_API } from '../constants';
import UserCard from '../UserCard';
import teamStyle from './style.module.css';

const initialState = {
	loading: false,
	usersList: [],
	error: '',
};
function reducer(state, action) {
	if (action.type === 'SUCCESS') {
		return {
			loading: true,
			usersList: action.payload,
			error: '',
		};
	} if (action.type === 'ERROR') {
		return {
			loading: false,
			usersList: [],
			error: 'conection false',
		};
	}
	return state;
}

function Team() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		const takes = async () => {
			try {
				await fetch(USERS_LIST_API, {
					method: 'GET',
				})
					.then((response) => response.json())
					.then((user) => {
						dispatch({
							type: 'SUCCESS',
							payload: user,
						});
					});
			} catch (error) {
				dispatch({
					type: 'ERROR',
				});
			}
		};
		takes();
	}, []);

	const { loading, error } = state;
	if (!loading) {
		return <div className={teamStyle.loading}>Loading...</div>;
	}

	if (error) {
		return (
			<div className={teamStyle.error}>
				Error:
				{' '}
				{error}
			</div>
		);
	}

	const users = state.usersList;
	const allusers = users.map((user) => (
		<UserCard
			key={user.id}
			name={user.firstName}
			job={user.secondName}
			description={user.description}
			telegramLink={user.socialMediaList[0].url}
			vkLink={user.socialMediaList[1].url}
		/>
	));

	return (
		<div className={teamStyle.allUsers}>{allusers}</div>
	);
}

export default Team;
