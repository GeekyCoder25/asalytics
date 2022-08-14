// import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.navlogo}>
				<Image src='/logo.png' alt='Vercel Logo' width={30} height={63} />
				<span className={styles.navlogotext}>ASalytics</span>
			</div>
			<Link href='/'>
				<a className={styles.navlink}>ANALYSE ASAs</a>
			</Link>
		</nav>
	);
};

export default Navbar;
