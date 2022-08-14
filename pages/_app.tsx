import '../styles/globals.css';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../gql';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
