import '../styles/styles.css'
import App from 'next/app'
import type { AppProps } from 'next/app'
import React from 'react'
import { appWithTranslation } from '../lib/i18n'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />

MyApp.getInitialProps = async appContext => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
