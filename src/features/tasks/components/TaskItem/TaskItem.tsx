import { type Task } from '@/features/tasks/model/types';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { type JSX } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { priorityStyles } from './constants';

interface TaskProps {
	task: Task;
}

export const TaskItem = ({ task }: TaskProps): JSX.Element => {
	const { removeTask } = useTasks();

	const { date, priority, title, id } = task;
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		removeTask(id);
	};

	return (
		<motion.li
			layout
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.2 }}
			className={clsx('flex justify-between items-center gap-8 px-4 py-3 rounded-md', priorityStyles[priority].bg)}
		>
			<div className='max-w-3/5'>
				<div className={clsx('flex items-center gap-1', priorityStyles[priority].text)}>
					<span className='block truncate'>{title}</span> - <span className='font-bold'>{priority}</span>
				</div>
				<div className='text-gray-500'>Due: {date}</div>
			</div>
			<div className='flex flex-col gap-1'>
				<button className='flex items-center justify-center w-full bg-green-500 text-white px-1.5 py-1 rounded-sm font-bold cursor-pointer hover:bg-green-400 transition-colors no-drag'>
					Complete
				</button>
				<button
					className='flex items-center justify-center w-full bg-red-500 text-white px-1.5 py-1 rounded-sm font-bold cursor-pointer hover:bg-red-400 transition-colors no-drag'
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</motion.li>
	);
};
