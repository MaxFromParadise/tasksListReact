import clsx from 'clsx';
import { type JSX } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { TaskItem } from '../TaskItem/TaskItem';

export const CurrentTasks = (): JSX.Element => {
	const { tasks } = useTasks();

	const renderTasks = () => {
		return tasks.map((task) => {
			return (
				<TaskItem
					key={task.id}
					task={task}
				/>
			);
		});
	};

	return (
		<div>
			<hr className={clsx('opacity-10 mb-5')} />
			<div className={clsx('flex flex-col gap-3')}>{tasks.length > 0 ? renderTasks() : 'Empty'}</div>
		</div>
	);
};
