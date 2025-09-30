import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TasksProvider } from './providers/TasksProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TasksProvider>
			<App />
		</TasksProvider>
	</StrictMode>
);
