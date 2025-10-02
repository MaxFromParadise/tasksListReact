import { AddTaskForm } from '@/features/tasks/components/AddTaskForm/AddTaskForm';
import { CurrentTasks } from '@/features/tasks/components/CurrentTasks/CurrentTasks';
import { Card } from '@/shared/ui/Card/Card';

function App() {
	return (
		<div className='p-8 flex flex-col gap-8 items-center justify-center '>
			<Card
				title='Task List with Priority'
				className='w-full'
			>
				<AddTaskForm />
			</Card>
			<Card
				title='Current Tasks'
				className='w-full'
			>
				<CurrentTasks />
			</Card>
		</div>
	);
}

export default App;
