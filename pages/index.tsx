import Link from 'next/link'
import React from 'react'

const strings: Record<string, string> = {
  homePage: 'Home page',
  testPage: 'Go to test page',
}

interface MainProps {}

const Main = ({}: MainProps): JSX.Element => (
  <div id="page_container">
    <h1>{strings.homePage}</h1>
    <div className="nav-bar">
      <Link href="/test">
        <a className="nav-bar-item">{strings.testPage}</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)


export default Main
