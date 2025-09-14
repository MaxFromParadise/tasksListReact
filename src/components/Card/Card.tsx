import { clsx } from 'clsx/lite';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { type JSX, type ReactNode, useState } from 'react';

interface CardProps {
	title: string;
	className?: string;
	children: ReactNode;
	as?: 'h2' | 'h3' | 'h4';
}

const Card = ({ title, className, children, as: Heading = 'h3' }: CardProps): JSX.Element => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<article className={clsx('relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm', className)}>
			<div className='flex items-start justify-between gap-2'>
				<Heading className='mb-3 text-2xl font-bold tracking-tight text-gray-900'>{title}</Heading>
				<motion.button
					type='button'
					aria-label={collapsed ? 'Развернуть' : 'Свернуть'}
					className='ml-2 rounded p-1 text-gray-500 hover:text-gray-900 transition'
					onClick={() => setCollapsed((prev) => !prev)}
					animate={{ rotate: collapsed ? 45 : 0 }}
					transition={{ duration: 0.2, ease: 'linear' }}
				>
					<X size={20} />
				</motion.button>
			</div>

			<AnimatePresence initial={false}>
				{!collapsed && (
					<motion.div
						key='content'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className='overflow-hidden'
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};

export default Card;
