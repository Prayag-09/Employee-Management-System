import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<EmployeeDashboard />} />
				<Route path='/admin' element={<AdminDashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
