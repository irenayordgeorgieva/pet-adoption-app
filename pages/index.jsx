import { i18n, withTranslation } from '../lib/i18n'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const HomePage = ({ t: tr }) => (
  <div id="page_container">
    <h1>{tr('homePage')}</h1>
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'bg' : 'en')}
      type="button"
    >
      {tr('change-locale')}
    </button>
    <div className="nav-bar">
      <Link href="/test">
        <a className="nav-bar-item">{tr('testPage')}</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)

HomePage.propTypes = {
  t: PropTypes.func.isRequired
}


export default withTranslation()(HomePage)
