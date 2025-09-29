import { createContext, useState, type ReactNode } from 'react';
import type { Task } from '../types/task/task';

interface TasksContextType {
	tasks: Task[];
	addTask: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

	return <TasksContext.Provider value={{ tasks, addTask }}>{children}</TasksContext.Provider>;
};
