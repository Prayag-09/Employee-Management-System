import React, { useState } from 'react';
import TaskCard from '../TaskCard';

interface Task {
	name: string;
	description: string;
	date: string;
	isCompleted: boolean;
}

const TaskIndex: React.FC = () => {

	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState<string>('');
	const [newDescription, setNewDescription] = useState<string>('');


	const handleComplete = (index: number) => {
		const updatedTasks = tasks.map((task, i) =>
			i === index ? { ...task, isCompleted: !task.isCompleted } : task
		);
		setTasks(updatedTasks);
	};

	const handleAddTask = () => {
		if (newTask.trim() === '' || newDescription.trim() === '') return;

		const taskObj: Task = {
			name: newTask,
			description: newDescription,
			date: new Date().toLocaleDateString(),
			isCompleted: false,
		};

		setTasks([...tasks, taskObj]);
		setNewTask('');
		setNewDescription('');
	};

	return (
		<div className='flex flex-col items-center mt-10'>
			{/* Task input */}
			<div className='flex justify-center mb-6 gap-2'>
				<input
					type='text'
					className='border border-gray-300 rounded-lg px-4 py-2'
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder='Enter task name...'
				/>
				<input
					type='text'
					className='border border-gray-300 rounded-lg px-4 py-2'
					value={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
					placeholder='Enter task description...'
				/>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
					onClick={handleAddTask}>
					Add Task
				</button>
			</div>

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
