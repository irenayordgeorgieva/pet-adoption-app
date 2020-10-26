import Link from 'next/link'
import React from 'react'

const strings: Record<string, string> = {
  badRequest: 'Bad Request test',
  homePage: 'Go to home page',
  notFound: 'Not Found test',
  testPage: 'Test page',
}

interface TestProps {}

const Test = ({}: TestProps): JSX.Element => (
  <div id="page_container">
    <h1>{strings.testPage}</h1>
    <div className="nav-bar">
      <Link href="/">
        <a className="nav-bar-item">{strings.homePage}</a>
      </Link>
      <Link href="/badRequestTest">
        <a className="nav-bar-item">{strings.badRequest}</a>
      </Link>
      <Link href="/tesst">
        <a className="nav-bar-item">{strings.notFound}</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)


export default Test
