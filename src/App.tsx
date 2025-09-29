import { AddTaskForm } from './components/AddTaskForm/AddTaskForm';
import { Card } from './components/Card/Card';
import { TasksProvider } from './context/TasksContext';

function App() {
	return (
		<TasksProvider>
			<div className='p-8 flex flex-col items-center justify-center'>
				<Card
					title='Task List with Priority'
					className='w-full'
				>
					<AddTaskForm />
				</Card>
			</div>
		</TasksProvider>
	);
}

export default App;
