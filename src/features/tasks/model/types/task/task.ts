import type { Priority } from '../index';

export interface Task {
	id: string;
	title: string;
	priority: Priority;
	date: string;
}
