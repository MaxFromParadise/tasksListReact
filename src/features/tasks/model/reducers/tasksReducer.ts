// reducer.ts
import type { Task } from '../types';
import { TasksActionType, type TasksAction } from '../types';

export const tasksReducer = (state: Task[], action: TasksAction): Task[] => {
	switch (action.type) {
		case TasksActionType.SET_TASKS:
			return action.payload;
		case TasksActionType.ADD_TASK:
			return [...state, action.payload];
		case TasksActionType.REMOVE_TASK:
			return state.filter((task) => task.id !== action.payload);
		default:
			return state;
	}
};
