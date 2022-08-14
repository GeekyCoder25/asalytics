import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Grid from '../components/Card';
import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_ASA } from '../gql/statements';
import { ASAType } from '../types/asa';

const Home: NextPage = () => {
	const { loading, error, data } = useQuery(GET_ALL_ASA);
	return (
		<div>
			<Head>
				<title>Analytics</title>
				<meta name='description' content='Analyticts Coding Assesment' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>
				{loading ? (
					<div className={styles.loading}>Loading........</div>
				) : error?.message ? (
					<div className={styles.loading}>{`${error?.message} data ☹️`}</div>
				) : (
					data.asalist.results.map((asa: ASAType) => (
						<Grid key={asa.assetId} asa={asa} />
					))
				)}
			</main>
		</div>
	);
};

export default Home;
