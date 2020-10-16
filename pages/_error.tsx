import { useRouter } from 'next/router'
import { NextPageContext } from 'next/types'

const Error = ({ statusCode }: ErrorProps) => {
  const router = useRouter()

  return (
    <div id="page_container">
      <h1>{`Error ${statusCode}`}</h1>
      <div className="nav-bar">
        <span onClick={() => router.back()}><a className="nav-bar-item">Go back</a></span>
      </div>
      <div className="main-cat-image-container">
        <img className="main-cat-image" src={`https://http.cat/${statusCode}.jpg`} />
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

type ErrorProps = {
  statusCode: number
}

export default Error
