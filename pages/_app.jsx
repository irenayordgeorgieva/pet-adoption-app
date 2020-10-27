import '../styles/styles.css'
import App from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import { appWithTranslation } from '../lib/i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async appContext => ({ ...await App.getInitialProps(appContext) })

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
}

export default appWithTranslation(MyApp)
