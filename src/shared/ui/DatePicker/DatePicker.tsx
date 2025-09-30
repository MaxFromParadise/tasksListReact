import type { HTMLAttributes, JSX, Ref } from 'react';
import { forwardRef } from 'react';

interface DatePickerProps extends HTMLAttributes<HTMLInputElement> {
	error?: string;
}

export const DatePicker = forwardRef(({ className, error, ...props }: DatePickerProps, ref: Ref<HTMLInputElement>): JSX.Element => {
	return (
		<div className='w-full relative'>
			<input
				ref={ref}
				type='datetime-local'
				className={`bg-gray-50 border text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${className ?? ''}`}
				{...props}
			/>
			{error && <p className='absolute -bottom-4 left-0 text-xs text-red-600'>{error}</p>}
		</div>
	);
});

DatePicker.displayName = 'DatePicker';
