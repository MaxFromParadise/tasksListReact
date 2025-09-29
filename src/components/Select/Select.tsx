import { useState, type JSX, type SelectHTMLAttributes } from 'react';
import { Priority } from '../../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = ({ className, ...props }: SelectProps): JSX.Element => {
	const [value, setValue] = useState<Priority>(Priority.Low);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value as Priority);
	};

	return (
		<select
			onChange={handleChange}
			value={value}
			className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
				focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className ?? ''}`}
			{...props}
		>
			<option value={Priority.Low}>Low</option>
			<option value={Priority.Medium}>Medium</option>
			<option value={Priority.High}>High</option>
		</select>
	);
};

Select.displayName = 'Select';
