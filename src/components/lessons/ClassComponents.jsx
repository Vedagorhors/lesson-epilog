import { Component, useEffect, useState } from 'react';
import styles from '../../App.module.css';

export const ClassComponents = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);

		const updateScreenWidth = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', updateScreenWidth);

		return () => window.removeEventListener('resize', updateScreenWidth);
	}, []); // у меня писало проблему: поэтому я дописал в пустой массив message, но в уроке здесть пустой массив зависимостей, чтобы UseEffect запускался только один раз при монтировании компонента, но если message изменится, то useEffect не перезапустится и не увидит новое значение. Но я оставил массив пустым как в уроке

	return (
		<div className={styles.app}>
			<h2>Functional Component</h2>
			<div>
				{message}: {screenWidth}
			</div>
		</div>
	);
};

export class OldClassComponents extends Component {
	// state = window.innerWidth; как вариант можно объявить состояние здесь

	constructor(props) {
		super(props);

		// console.log(props.message); аналог useLayoutEffect()

		// this.state = window.innerWidth; но обычно состояние объявляют в конструкторе
		// для установки состояния нужно использовать именно слово state, но если я хочу, чтобы было понятно что находится в состоянии, я могу сделать его объектом, в котором записать данные свойства с нужным именем:
		this.state = {
			screenWidth: window.innerWidth,
		};

		// this.updateScreenWidth = this.updateScreenWidth.bind(this); Так как контекст мы получаем через this, то, чтобы контекст не потерялся есть один из трех способов привязать его в конструкторе с помощью метода bind
		// второй способ - это объявить стрелочную функцию как поле класса: updateScreenWidth = () =>
		// будем использовать этот второй способ
	}
	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth });
	};

	componentDidMount() {
		console.log(this.props.message);

		window.addEventListener('resize', this.updateScreenWidth);
		// здесь описан третий метод привязки контекста. В качестве коллбэка сразу передают стрелочную функцию и вызывают метод через this. , поэтому контекст не теряется:
		// window.addEventListener('resize', () => this.updateScreenWidth());
	}

	// Допишем размонтирование компонента, аналог кода из функционального компонента:
	// () => window.removeEventListener('resize', updateScreenWidth)

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenWidth);
	}

	render() {
		return (
			<div className={styles.app}>
				<h2>Class Component</h2>
				<div>
					{this.props.message}: {this.state.screenWidth}
				</div>
			</div>
		);
	}
}
