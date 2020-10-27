import { i18n, withTranslation } from '../lib/i18n'
import Link from 'next/link'
import React from 'react'
import type { TFunction } from 'next-i18next'

interface HomePageTypes {
  t: TFunction;
}

const HomePage = ({ t: tr }: HomePageTypes): JSX.Element => (
  <div id="page_container">
    <h1>{tr('homePage')}</h1>
    <button
      onClick={async (): Promise<TFunction> => i18n.changeLanguage(i18n.language === 'en' ? 'bg' : 'en')}
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


export default withTranslation()(HomePage)
