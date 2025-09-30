import type { Task, TasksAction } from '../types';
import { TasksActionType } from '../types';

export const addTask = (task: Task): TasksAction => ({
	type: TasksActionType.ADD_TASK,
	payload: task,
});

export const removeTask = (id: string): TasksAction => ({
	type: TasksActionType.REMOVE_TASK,
	payload: id,
});
