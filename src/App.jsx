import { UseCallbackUseMemo } from './components/lessons/UseCallbackUseMemo';
import {
	ClassComponents,
	OldClassComponents,
} from './components/lessons/ClassComponents';
import { RenderProps } from './components/lessons/RenderProps';
import { HOC } from './components/lessons/HOC';

const currentLesson = 4;

const lessonsMap = {
	1: () => <UseCallbackUseMemo />,
	2: () => (
		<>
			<ClassComponents message="Функциональный компонент" />
			<OldClassComponents message="Классовый компонент" />
		</>
	),
	3: () => <RenderProps />,
	4: () => <HOC />,
	// сюда я могу добавлять новые компоненты, которые буду создавать по урокам и нужно переключать currentLesson на соответствующий уроку номер, чтобы данный компонент в текущем файле урока рендерился и выводилась страница в браузере. Так я решил проблему не создавать под каждый урок раздела отдельный проект, а просто в одном проекте создаю новые файлы и переключаюсь на них в App.jsx
};

export const App = () => lessonsMap[currentLesson]();
