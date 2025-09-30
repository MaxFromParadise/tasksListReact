import { TasksContext } from '@/features/tasks/context/TasksContext';
import { addTaskAction, removeTaskAction } from '@/features/tasks/model/actions';
import { tasksReducer } from '@/features/tasks/model/reducers/tasksReducer';
import type { Task } from '@/features/tasks/model/types';
import type { ReactNode } from 'react';
import { useMemo, useReducer } from 'react';

interface TasksProviderProps {
	children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	const addTask = (task: Task) => dispatch(addTaskAction(task));
	const removeTask = (id: string) => dispatch(removeTaskAction(id));

	const value = useMemo(() => ({ tasks, addTask, removeTask }), [tasks]);

	return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};
