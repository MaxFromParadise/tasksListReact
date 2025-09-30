import { TasksContext } from '@/features/tasks/context/TasksContext';
import { tasksReducer } from '@/features/tasks/model/reducers/tasksReducer';
import type { ReactNode } from 'react';
import { useReducer } from 'react';

interface TasksProviderProps {
	children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return <TasksContext.Provider value={{ tasks, dispatch }}>{children}</TasksContext.Provider>;
};
