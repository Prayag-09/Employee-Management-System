import React, { useState } from 'react';
import TaskCard from '../Reusable/TaskCard';

interface Task {
	name: string;
	description: string;
	date: string;
	isCompleted: boolean;
}

const TaskIndex: React.FC = () => {
	// Hardcoded tasks
	const [tasks, setTasks] = useState<Task[]>([
		{
			name: 'Finish Project Report',
			description: 'Complete the final project report and submit by end of the week.',
			date: new Date().toLocaleDateString(),
			isCompleted: false,
		},
		{
			name: 'Team Meeting',
			description: 'Attend the team meeting to discuss project updates.',
			date: new Date().toLocaleDateString(),
			isCompleted: false,
		},
		{
			name: 'Code Review',
			description: 'Review the codebase and provide feedback on pull requests.',
			date: new Date().toLocaleDateString(),
			isCompleted: false,
		},
		{
			name: 'Client Presentation',
			description: 'Prepare and deliver the presentation to the client.',
			date: new Date().toLocaleDateString(),
			isCompleted: false,
		},
	]);

	const handleComplete = (index: number) => {
		const updatedTasks = tasks.map((task, i) =>
			i === index ? { ...task, isCompleted: !task.isCompleted } : task
		);
		setTasks(updatedTasks);
	};

	return (
		<div className='flex flex-col items-center mt-10'>
			{/* Task list */}
			<div
				id='tasklist'
				className='flex flex-nowrap justify-center items-start gap-5 overflow-x-auto w-full'>
				{tasks.length === 0 ? (
					<p className='text-gray-500'>All tasks completed !! 😄</p>
				) : (
					tasks.map((task, index) => (
						<TaskCard
							key={index}
							task={task}
							onComplete={() => handleComplete(index)}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default TaskIndex;
