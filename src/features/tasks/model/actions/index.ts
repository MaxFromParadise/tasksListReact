import type { Task, TasksAction } from '../types';
import { TasksActionType } from '../types';

export const addTaskAction = (task: Task): TasksAction => ({
	type: TasksActionType.ADD_TASK,
	payload: task,
});

export const removeTaskAction = (id: string): TasksAction => ({
	type: TasksActionType.REMOVE_TASK,
	payload: id,
});
