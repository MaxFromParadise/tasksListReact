import { Priority } from '@/features/tasks/model/types';
import type { JSX, Ref, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	error?: string;
}

export const Select = forwardRef(({ className, error, ...props }: SelectProps, ref: Ref<HTMLSelectElement>): JSX.Element => {
	return (
		<div className='w-full relative'>
			<select
				ref={ref}
				className={`bg-gray-50 border text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${className ?? ''}`}
				{...props}
			>
				<option value={Priority.Low}>Low</option>
				<option value={Priority.Medium}>Medium</option>
				<option value={Priority.High}>High</option>
			</select>
			{error && <p className='absolute -bottom-4 left-0 text-xs text-red-600'>{error}</p>}
		</div>
	);
});

Select.displayName = 'Select';
