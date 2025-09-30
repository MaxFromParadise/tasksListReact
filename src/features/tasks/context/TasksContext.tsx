import type { Task } from '@/features/tasks/model/types/task/task';
import { createContext } from 'react';

interface TasksContextProps {
	tasks: Task[];
	addTask: (task: Task) => void;
	removeTask: (id: string) => void;
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);
