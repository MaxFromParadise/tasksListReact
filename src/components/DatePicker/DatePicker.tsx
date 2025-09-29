import { useState, type DetailedHTMLProps, type HTMLAttributes, type JSX } from 'react';

interface DatePickerProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const DatePicker = ({}: DatePickerProps): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<input
			className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
			type='datetime-local'
			onChange={handleChange}
			value={value}
		/>
	);
};

DatePicker.displayName = 'DatePicker';
