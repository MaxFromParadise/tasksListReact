import type { Task, TasksAction } from '@/features/tasks/model/types/task/task';
import { createContext, type Dispatch } from 'react';

interface TasksContextProps {
	tasks: Task[];
	dispatch: Dispatch<TasksAction>;
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);
