import TaskIndex from '../TaskList/TaskIndex';
import TaskListManager from './TaskListManager';

const EmployeeDashboard = () => {
	return (
		<section className='min-h-screen flex flex-col justify-center'>
			<h1 className='font-extrabold text-white text-3xl m-1 pb-2 '>
				Hello there 👋
			</h1>
			<TaskListManager />
			<TaskIndex />
		</section>
	);
};

export default EmployeeDashboard;
