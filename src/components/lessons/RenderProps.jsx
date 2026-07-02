import styles from '../../App.module.css';

export const HelloMessage = ({ user }) => {
	return <span>Привет, {user}</span>;
};

export const GoodByeMessage = ({ user }) => {
	return <span>До свидания, {user}</span>;
};

export const UserWidget = ({ render }) => {
	const user = 'Василий';

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			{render(user)}
			{/* {children(user)} */}
			{/* <HelloMessage user={user} /> */}
			{/* <GoodByeMessage user={user} /> */}
		</div>
	);
};

export const RenderProps = () => {
	return (
		<div className={styles.app}>
			<div>
				<h2>Render Props</h2>
				{/* <UserWidget>{(user) => <HelloMessage user={user} />}</UserWidget> */}
				<UserWidget render={(user) => <GoodByeMessage user={user} />} />
			</div>
		</div>
	);
};
