import { deleteTask, fetchTasks, postTask } from '@/features/tasks/api/tasksApi';
import { TasksContext } from '@/features/tasks/context/TasksContext';
import { addTaskAction, removeTaskAction, setTasksAction } from '@/features/tasks/model/actions';
import { tasksReducer } from '@/features/tasks/model/reducers/tasksReducer';
import type { Task } from '@/features/tasks/model/types';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import toast from 'react-hot-toast';

interface TasksProviderProps {
	children: ReactNode;
}

const initialState: Task[] = [];

export const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialState);

	const setTasks = useCallback((tasks: Task[]) => dispatch(setTasksAction(tasks)), []);
	const addTask = useCallback(async (task: Task) => {
		await toast.promise(
			postTask(task).then((created) => {
				dispatch(addTaskAction(created));
			}),
			{
				loading: 'Adding task...',
				success: 'Task added',
				error: 'Failed to add task 😢',
			},
			{ position: 'bottom-right' }
		);
	}, []);
	const removeTask = useCallback(async (id: string) => {
		await toast.promise(
			deleteTask(id).then(() => {
				dispatch(removeTaskAction(id));
			}),
			{
				loading: 'Deleting task...',
				success: 'Task deleted!',
				error: 'Failed to delete task 😢',
			},
			{ position: 'bottom-right' }
		);
	}, []);

	useEffect(() => {
		const loadTasks = async () => {
			try {
				const data = await fetchTasks();
				setTasks(data);
			} catch (err) {
				console.error(err);
			}
		};

		loadTasks();
	}, []);

	const value = useMemo(() => ({ tasks, addTask, removeTask }), [tasks, addTask, removeTask]);

	return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};
