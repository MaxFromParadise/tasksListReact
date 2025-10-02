import clsx from 'clsx';
import { type JSX } from 'react';
import GridLayout, { type Layout, WidthProvider } from 'react-grid-layout';
import { useTasks } from '../../hooks/useTasks';
import { TaskItem } from '../TaskItem/TaskItem';

import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(GridLayout);

export const CurrentTasks = (): JSX.Element => {
	const { tasks } = useTasks();

	const layout: Layout[] = tasks.map((task, index) => ({
		i: task.id,
		x: 0,
		y: index,
		w: 1,
		h: 1,
		static: false,
	}));

	return (
		<div>
			<hr className={clsx('opacity-10 mb-5')} />
			{tasks.length > 0 ? (
				<ResponsiveGridLayout
					className='layout'
					layout={layout}
					cols={1}
					rowHeight={80}
					isResizable={false}
					margin={[0, 30]}
					width={360}
					draggableCancel='.no-drag'
				>
					{tasks.map((task) => (
						<div key={task.id}>
							<TaskItem task={task} />
						</div>
					))}
				</ResponsiveGridLayout>
			) : (
				<div>Empty</div>
			)}
		</div>
	);
};
