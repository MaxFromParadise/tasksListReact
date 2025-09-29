export enum TaskPriority {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}

export interface Task {
	id: string;
	title: string;
	priority: TaskPriority;
	date: string;
}
