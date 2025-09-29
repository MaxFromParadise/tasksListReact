import { type JSX } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTasks } from '../../hooks/tasks/useTasks';
import { Priority, type Task } from '../../types';
import { DatePicker } from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

type TaskFormValues = Omit<Task, 'id'>;

interface AddTaskFormProps {
	onSubmit?: (task: Task) => void;
}

export const AddTaskForm = ({ onSubmit }: AddTaskFormProps): JSX.Element => {
	const { addTask } = useTasks();

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<TaskFormValues>({
		defaultValues: {
			title: '',
			priority: Priority.Low,
			date: new Date().toISOString().slice(0, 16),
		},
	});

	const submitHandler = (data: TaskFormValues) => {
		const newTask: Task = {
			...data,
			id: crypto.randomUUID(),
		};
		onSubmit?.(newTask);
		addTask(newTask);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className='flex flex-col gap-4 max-w-[90%] m-auto'
		>
			{/* Title */}
			<Input
				placeholder='Task title'
				{...register('title', { required: 'Title is required' })}
				error={errors.title?.message}
			/>

			{/* Priority */}
			<Select
				{...register('priority', { required: 'Priority is required' })}
				error={errors.priority?.message}
			/>

			{/* Date */}
			<Controller
				name='date'
				control={control}
				rules={{ required: 'Date is required' }}
				render={({ field, fieldState }) => (
					<DatePicker
						{...field}
						error={fieldState.error?.message}
					/>
				)}
			/>

			{/* Submit */}
			<button
				type='submit'
				disabled={isSubmitting}
				className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400'
			>
				Add Task
			</button>
		</form>
	);
};

AddTaskForm.displayName = 'AddTaskForm';
