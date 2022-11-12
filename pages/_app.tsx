import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
        <title>Anthony Mesina</title>
        <meta name="description" content="Project Porfolio" />
        <link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
