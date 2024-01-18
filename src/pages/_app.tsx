import Head from 'next/head';
import type { AppProps } from 'next/app';

import AppProvider from '@/hooks/app-provider';
import '../styles/globals.css';
import { IntlProvider } from 'react-intl';
import localesMessages from '@/locales';
import Script from 'next/script';

const locale = 'pt-BR';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id="ga-integration" strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
					});
				`}
			</Script>

			<Head>
				<title>My new cool app</title>
			</Head>

			<IntlProvider locale={locale} messages={localesMessages[locale]}>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</IntlProvider>
		</>
	);
}

export default MyApp;
