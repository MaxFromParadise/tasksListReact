import { deleteTask, fetchTasks, postTask } from '@/features/tasks/api/tasksApi';
import { TasksContext } from '@/features/tasks/context/TasksContext';
import { addTaskAction, removeTaskAction, setTasksAction } from '@/features/tasks/model/actions';
import { tasksReducer } from '@/features/tasks/model/reducers/tasksReducer';
import type { Task } from '@/features/tasks/model/types';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { toast } from 'react-toastify';

interface TasksProviderProps {
	children: ReactNode;
}

const initialState: Task[] = [];

export const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialState);

	const setTasks = useCallback((tasks: Task[]) => dispatch(setTasksAction(tasks)), []);
	const addTask = useCallback(async (task: Task) => {
		try {
			const created = await postTask(task);
			dispatch(addTaskAction(created));
			toast.success('Task added', {
				position: 'bottom-right',
				autoClose: 3000,
			});
		} catch (err) {
			console.error(err);
			toast.error(`${err}`, {
				position: 'bottom-right',
				autoClose: 3000,
			});
		}
	}, []);
	const removeTask = useCallback(async (id: string) => {
		try {
			await deleteTask(id);
			dispatch(removeTaskAction(id));
			toast.success('Task deleted', {
				position: 'bottom-right',
				autoClose: 3000,
			});
		} catch (err) {
			console.error(err);
			toast.success(`${err}`, {
				position: 'bottom-right',
				autoClose: 3000,
			});
		}
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
