import Link from 'next/link'

const Test = () => (
  <div id="page_container">
    <h1>Test page</h1>
    <div className="nav-bar">
      <Link href="/">
        <a className="nav-bar-item">Go to home page</a>
      </Link>
      <Link href="/badRequestTest">
        <a className="nav-bar-item">Bad Request test</a>
      </Link>
      <Link href="/tesst">
        <a className="nav-bar-item">Not Found test</a>
      </Link>
    </div>
    <div className="main-cat-image-container">
      <img className="main-cat-image" src="http://lorempixel.com/750/600/cats" />
    </div>
  </div>
)

export default Test
