import type { JSX } from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

interface TaskFormProps {}

export const AddTaskForm = ({}: TaskFormProps): JSX.Element => {
	return (
		<form>
			<div className='m-auto mb-5 max-w-[90%] flex flex-col items-center justify-center gap-5'>
				<Input placeholder='Task title' />
				<Select />
				<DatePicker />
			</div>
		</form>
	);
};

AddTaskForm.displayName = 'AddTaskForm';
