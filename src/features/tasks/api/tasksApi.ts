import type { Task } from '../model/types';

const API_URL = 'http://localhost:9000/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
	const res = await fetch(API_URL);
	if (!res.ok) throw new Error('Failed to fetch tasks');
	return res.json();
};

export const postTask = async (task: Task): Promise<Task> => {
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(task),
	});
	if (!response.ok) throw new Error('Failed to create task');
	return response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
	});
	if (!response.ok) throw new Error('Failed to delete task');
};
