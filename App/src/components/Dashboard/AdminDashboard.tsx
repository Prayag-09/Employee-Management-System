import { useState } from 'react';
import Inputbox from '../Reusable/Inputbox';

interface Task {
	title: string;
	description: string;
	date: string;
	assignedTo: string;
	category: string;
	priority: string;
}

const AdminDashboard: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [assignedTo, setAssignedTo] = useState<string>('');
	const [category, setCategory] = useState<string>('');
	const [priority, setPriority] = useState<string>('');
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleAddTask = () => {
		if (
			title.trim() === '' ||
			description.trim() === '' ||
			date.trim() === '' ||
			assignedTo.trim() === '' ||
			category.trim() === '' ||
			priority.trim() === ''
		) {
			alert('Please fill in all fields.');
			return;
		}

		const newTask: Task = {
			title,
			description,
			date,
			assignedTo,
			category,
			priority,
		};

		setTasks([...tasks, newTask]);
		setTitle('');
		setDescription('');
		setDate('');
		setAssignedTo('');
		setCategory('');
		setPriority('');
	};

	return (
		<div className='flex flex-col items-center p-5'>
			<div className='bg-gray-400 shadow-lg rounded-lg p-6 w-full max-w-md mb-5'>
				<h2 className='text-xl font-bold text-center mb-4'>Add New Task</h2>
				<div className='flex flex-col gap-4'>
					<Inputbox
						title='Task Title'
						placeholder='Enter task title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<Inputbox
						title='Task Description'
						placeholder='Enter task description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>

					<Inputbox
						title='Due Date'
						placeholder='Enter task due date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
						type='date'
					/>

					<Inputbox
						title='Assigned To'
						placeholder='Enter assignee name'
						value={assignedTo}
						onChange={(e) => setAssignedTo(e.target.value)}
					/>

					<Inputbox
						title='Category'
						placeholder='Enter task category'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>

					<select
						className='border border-gray-300 rounded-lg px-4 py-2'
						value={priority}
						onChange={(e) => setPriority(e.target.value)}>
						<option value='' disabled>
							Select priority
						</option>
						<option value='High'>High</option>
						<option value='Medium'>Medium</option>
						<option value='Low'>Low</option>
					</select>

					<button
						className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
						onClick={handleAddTask}>
						Submit Task
					</button>
				</div>
			</div>

			<div className='bg-red-500 shadow-lg rounded-lg p-6 w-full max-w-md'>
				<h2 className='text-xl font-bold text-center mb-4'>Task List</h2>
				{tasks.length === 0 ? (
					<p className='text-white text-center'>No tasks added yet.</p>
				) : (
					<ul className='flex flex-col gap-4'>
						{tasks.map((task, index) => (
							<li
								key={index}
								className='flex flex-col border border-gray-300 rounded-lg p-4'>
								<div className='flex justify-between mb-2'>
									<h3 className='font-semibold text-lg'>{task.title}</h3>
									<span className='text-white'>{task.date}</span>
								</div>
								<p className='text-white'>{task.description}</p>
								<p className='text-white'>
									<strong>Assigned To:</strong> {task.assignedTo}
								</p>
								<p className='text-white'>
									<strong>Category:</strong> {task.category}
								</p>
								<p className='text-white'>
									<strong>Priority:</strong> {task.priority}
								</p>
							</li>
						))}
					</ul>
				)}
			</div>
			{/* <AllTasks /> */}
		</div>
	);
};

export default AdminDashboard;