import type { NextPageContext } from 'next/types'
import React from 'react'
import { useRouter } from 'next/router'

const strings: Record<string, string> = {
  goBack: 'Go back',
}

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps): JSX.Element => {
  const router = useRouter()
  return (
    <div id="page_container">
      <h1>{`Error ${statusCode}`}</h1>
      <div className="nav-bar">
        <span onClick={(): void => router.back()}><a className="nav-bar-item">{strings.goBack}</a></span>
      </div>
      <div className="main-cat-image-container">
        <img className="main-cat-image" src={`https://http.cat/${statusCode}.jpg`} />
      </div>
    </div>
  )
}

Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorProps> => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return Promise.resolve({ statusCode })
}

export default Error
