import type { Task } from '@/features/tasks/model/types/task/task';
import { createContext } from 'react';

interface TasksContextType {
	tasks: Task[];
	addTask: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);
