import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { TasksProvider } from './providers/TasksProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TasksProvider>
			<App />
			<Toaster />
		</TasksProvider>
	</StrictMode>
);
