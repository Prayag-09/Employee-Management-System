import Header from '../Header';
import TaskIndex from '../TaskList/TaskIndex';
import TaskListManager from './TaskListManager';

const EmployeeDashboard = () => {
	return (
		<div className='min-h-screen '>
			<Header />
			<section className=' pt-10 flex flex-col justify-center'>
				<div>
					<h1 className='font-extrabold text-white text-3xl m-1 pb-2 '>
						Hello there 👋
					</h1>
				</div>
				<TaskListManager />
				<TaskIndex />
			</section>
		</div>
	);
};

export default EmployeeDashboard;
