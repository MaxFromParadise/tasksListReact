import { TasksContext } from '@/features/tasks/context/TasksContext';
import type { Task } from '@/features/tasks/model/types';
import { useState, type ReactNode } from 'react';

export const TasksProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

	return <TasksContext.Provider value={{ tasks, addTask }}>{children}</TasksContext.Provider>;
};
