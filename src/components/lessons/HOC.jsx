import styles from '../../App.module.css';

export const HelloMessage = ({ user }) => {
	return <span>Привет, {user}</span>;
};

// Для получения доступа к пропс дочернего компонента используем callback

const withLogging = (Component) => {
	return (props) => {
		console.log(props.user);

		return <Component {...props} />;
	};
};

const withLoggingAndColor = (Component, color) => {
	return (props) => {
		console.log(props.user);

		return (
			<span style={{ color: color }}>
				<Component {...props} />
			</span>
		);
	};
};

// export const GoodByeMessage = ({ user }) => {
// 	return <span>До свидания, {user}</span>;
// };

const HelloMessageWithLogging = withLogging(HelloMessage);
const RedHelloMessageWithLogging = withLoggingAndColor(HelloMessage, 'red');

const MessageWithLoggingAndcolor = ({ Message, color, ...props }) => {
	console.log(props.user);

	return (
		<span style={{ color }}>
			<Message {...props} />
		</span>
	);
};

const ComponentWithLoggingAndcolor = ({ children, color, ...props }) => {
	console.log(props.user);

	return <span style={{ color }}>{children}</span>;
};

export const UserWidget = () => {
	const user = 'Василий';

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			<HelloMessageWithLogging user={user} />
			<br />
			<RedHelloMessageWithLogging user={user} />
			<br />
			<MessageWithLoggingAndcolor
				Message={HelloMessage}
				color="green"
				user={user}
			/>
			<br />
			<ComponentWithLoggingAndcolor
				// Message={HelloMessage}
				color="blue"
				user={user}
			>
				<HelloMessage user={user} />
			</ComponentWithLoggingAndcolor>

			{/* {render(user)} */}
			{/* {children(user)} */}
			{/* <HelloMessage user={user} /> */}
			{/* <GoodByeMessage user={user} /> */}
		</div>
	);
};

export const HOC = () => {
	return (
		<div className={styles.app}>
			<div>
				<h2>HOC (Higher-Order Components)</h2>
				<UserWidget />
				{/* <UserWidget>{(user) => <HelloMessage user={user} />}</UserWidget> */}
				{/* <UserWidget render={(user) => <GoodByeMessage user={user} />} /> */}
			</div>
		</div>
	);
};
