import React from 'react';

interface Task {
	name: string;
	description: string;
	date: string;
	isCompleted: boolean;
}

interface TaskCardProps {
	task: Task;
	onComplete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onComplete }) => {
	return (
		<div
			className={`flex-shrink-0 rounded-3xl p-6 w-[300px] h-full shadow-lg ${
				task.isCompleted ? 'bg-green-500' : 'bg-red-400'
			}`}>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='font-bold bg-red-900 px-4 py-1 rounded-xl text-white'>
					High
				</h3>
				<h3 className='italic font-semibold text-gray-700'>{task.date}</h3>
			</div>

			{/* Task content */}
			<div className='flex flex-col gap-2'>
				<p className='text-lg font-semibold text-gray-800'>
					{task.name} {task.isCompleted && '✔️'}
				</p>
				<p className='text-gray-100'>{task.description}</p>
			</div>

			{/* Mark Complete button */}
			<div className='flex justify-center mt-4'>
				<button
					className='bg-white text-green-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100'
					onClick={onComplete}>
					{task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
