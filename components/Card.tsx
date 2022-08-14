import styles from '../styles/Card.module.css';
import Image from 'next/image';
import { ASAType } from '../types/asa';

const Card = ({ asa }: { asa: ASAType }) => {
	return (
		<article className={styles.card}>
			<Image
				width={30}
				height={60}
				alt={asa.unitname1}
				src={asa.logo || '/bitcoin.png'}
			/>
			<p>{asa.name}</p>
			{asa.available ? (
				<button className={styles.available}>Available</button>
			) : (
				<button className={styles.unavailable}>Unavailable</button>
			)}
		</article>
	);
};

export default Card;
