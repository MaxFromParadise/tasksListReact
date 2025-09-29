import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

export const useTasks = () => {
	const ctx = useContext(TasksContext);
	if (!ctx) {
		throw new Error('useTasks must be used within a TasksProvider');
	}
	return ctx;
};
