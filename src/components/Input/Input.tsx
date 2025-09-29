import clsx from 'clsx';
import type { InputHTMLAttributes, JSX } from 'react';
import { useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	error?: string;
	initialValue?: string;
	onValueChange?: (value: string) => void;
}

export const Input = ({ className, error, initialValue = '', onValueChange, ...props }: InputProps): JSX.Element => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onValueChange?.(e.target.value);
	};

	return (
		<div className='w-full relative'>
			<input
				value={value}
				onChange={handleChange}
				className={clsx('block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500', error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300', className)}
				{...props}
			/>
			{error && <p className='absolute -bottom-4 left-0 text-xs text-red-600'>{error}</p>}
		</div>
	);
};
