import clsx from 'clsx';
import type { InputHTMLAttributes, JSX, Ref } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
}

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: Ref<HTMLInputElement>): JSX.Element => {
	return (
		<div className='w-full relative'>
			<input
				ref={ref}
				className={clsx('block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500', error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300', className)}
				{...props}
			/>
			{error && <p className='absolute -bottom-4 left-0 text-xs text-red-600'>{error}</p>}
		</div>
	);
});

Input.displayName = 'Input';
