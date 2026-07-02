import { memo, useMemo, useCallback, useState } from 'react';
import styles from '../../App.module.css';

export const Field = memo(({ name, label, value, onChange }) => {
	console.log(name);

	return (
		<label>
			<span>{label}: </span>
			<input type="number" name={name} value={value} onChange={onChange} />
		</label>
	);
});

export const UseCallbackUseMemo = () => {
	console.log('--------App--------');

	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);
	// const [result, setResult] = useState(0);

	// В коде useMemo() и useCallback() используются практически одинаковым образом. Но их разница в том, что useCallback() возвращает ссылку на коллбек не запуская его. А useMemo() запускает коллбек и возвращает то, что возвращает этот коллбек. Какой-то результат его вычислений.
	// В 95% случаев useCallback(), useMemo() и memo() использовать не нужно.

	// Эти три записи ниже работают абсолютно одинаково, просто в useMemo() наш коллбек стал возвращаемым значением из другого, родительского коллбека. Эти записи работают абсолютно одинаково, просто в useMemo() наш коллбек стал возвращаемым значением из другого, родительского коллбека.

	const onNumChange = useCallback(({ target }) => {
		setNum(target.value);
		// setResult(Math.pow(target.value, degree));
	}, []);

	// const onNumChange = useMemo(
	// 	() =>
	// 		({ target }) => {
	// 			setNum(target.value);
	// 			// setResult(Math.pow(target.value, degree));
	// 		},
	// 	[],
	// );

	// const onNumChange = useMemo(() => {
	// 	return ({ target }) => {
	// 		setNum(target.value);
	// 		// setResult(Math.pow(target.value, degree));
	// 	};
	// }, []);

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(target.value);
		// setResult(Math.pow(num, target.value));
	}, []);

	const hardCalculatedNum = useMemo(
		() => new Array(2000000).fill(0).reduce((res, el) => res + el, num),
		[num],
	);

	const result = Math.pow(hardCalculatedNum, degree);

	return (
		<div className={styles.app}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<Field name="num" label="Число" value={num} onChange={onNumChange} />
			<Field
				name="degree"
				label="Степень"
				value={degree}
				onChange={onDegreeChange}
			/>
		</div>
	);
};
