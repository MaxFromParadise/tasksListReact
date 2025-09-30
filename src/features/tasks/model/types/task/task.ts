import type { Priority } from '../index';

export interface Task {
	id: string;
	title: string;
	priority: Priority;
	date: string;
}

export enum TasksActionType {
	ADD_TASK = 'ADD_TASK',
	REMOVE_TASK = 'REMOVE_TASK',
}

export type TasksAction = { type: TasksActionType.ADD_TASK; payload: Task } | { type: TasksActionType.REMOVE_TASK; payload: string };
