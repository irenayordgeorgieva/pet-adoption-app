import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import { withTranslation } from 'next-i18next'

const Test = ({ t: tr }) => (
  <div id="page_container">
    <h1>{tr('testPage')}</h1>
    <div className="nav-bar">
      <Link href="/">
        <a className="nav-bar-item">{tr('homePage')}</a>
      </Link>
      <Link href="/badRequestTest">
        <a className="nav-bar-item">{tr('badRequest')}</a>
      </Link>
      <Link href="/tesst">
        <a className="nav-bar-item">{tr('notFound')}</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)

Test.propTypes = {
  t: PropTypes.func.isRequired
}


export default withTranslation()(Test)
