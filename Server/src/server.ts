import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to the Employee Management System');
});

app.post('/login', (req: Request, res: Response) => {
	// const { email, password } = req.body;
	// if (!email || !password) {
	// 	return res
	// 		.status(400)
	// 		.json({ message: 'Email and password are required.' });
	// }
	// return res.status(200).json({ message: 'Login successful', email });
});

app.listen(PORT, () => {
	console.log(`Server up and running on ${PORT}`);
});
