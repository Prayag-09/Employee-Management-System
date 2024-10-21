import React from 'react';

interface InputboxProps {
	title: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const Inputbox: React.FC<InputboxProps> = ({
	title,
	placeholder,
	value,
	onChange,
	type = 'text',
}) => {
	return (
		<div className='flex flex-col'>
			<label className='font-semibold mb-1'>{title}</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
			/>
		</div>
	);
};

export default Inputbox;
