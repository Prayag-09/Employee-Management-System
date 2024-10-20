import React from 'react';

const getRandomColor = (): string => {
	return `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
};

const TaskListManager: React.FC = () => {
	return (
		<div className='flex flex-wrap justify-center gap-8 mt-10'>
			<div
				className='h-48 w-full sm:w-[48%] lg:w-[30%] rounded-xl p-8 text-center'
				style={{ backgroundColor: getRandomColor() }}>
				<p className='text-3xl font-medium'>0</p>
				<p className='text-xl font-semibold'>Number of tasks</p>
				<p className='pt-5 text-center'>Assigned by Ted</p>
			</div>
			<div
				className='h-48 w-full sm:w-[48%] lg:w-[30%] rounded-xl p-8 text-center'
				style={{ backgroundColor: getRandomColor() }}>
				<p className='text-3xl font-medium'>0</p>
				<p className='text-xl font-semibold'>Number of tasks</p>
				<p className='pt-5 text-center'>Assigned by Ted</p>
			</div>
			<div
				className='h-48 w-full sm:w-[48%] lg:w-[30%] rounded-xl p-8 text-center'
				style={{ backgroundColor: getRandomColor() }}>
				<p className='text-3xl font-medium'>0</p>
				<p className='text-xl font-semibold'>Number of tasks</p>
				<p className='pt-5 text-center'>Assigned by Ted</p>
			</div>
		</div>
	);
};

export default TaskListManager;
