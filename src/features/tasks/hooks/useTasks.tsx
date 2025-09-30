// The useTasks hook provides access to the TasksContext value and ensures it’s used within a TasksProvider.
// const { tasks: Task[], addTask } = useTasks();

import { TasksContext } from '@/features/tasks/context/TasksContext';
import { useContext } from 'react';
export const useTasks = () => {
	const ctx = useContext(TasksContext);
	if (!ctx) {
		throw new Error('useTasks must be used within a TasksProvider');
	}
	return ctx;
};
