import Link from 'next/link'

const Main = () => (
  <div id="page_container">
    <h1>Home page</h1>
    <div className="nav-bar">
      <Link href="/test">
        <a className="nav-bar-item">Go to test page</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)

export default Main
