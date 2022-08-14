// import type { NextPage } from 'next';
import { ReactNode } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
	return (
		<div className='layout'>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
