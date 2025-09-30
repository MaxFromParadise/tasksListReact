import { AddTaskForm } from '@/features/tasks/components/AddTaskForm/AddTaskForm';
import { Card } from '@/shared/ui/Card/Card';

function App() {
	return (
		<div className='p-8 flex flex-col items-center justify-center'>
			<Card
				title='Task List with Priority'
				className='w-full'
			>
				<AddTaskForm />
			</Card>
		</div>
	);
}

export default App;
