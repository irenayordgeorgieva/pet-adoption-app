import type { NextPageContext } from 'next/types'
import React from 'react'
import type { TFunction } from 'next-i18next'
import { useRouter } from 'next/router'
import { withTranslation } from '../lib/i18n'

interface ErrorProps {
  statusCode?: number;
  t: TFunction;
}
interface InitialErrorProps {
  statusCode: number;
}

const Error = ({ statusCode, t: tr }: ErrorProps): JSX.Element => {
  const router = useRouter()
  return (
    <div id="page_container">
      <h1>{`Error ${statusCode}`}</h1>
      <div className="nav-bar">
        <span onClick={(): void => router.back()}><a className="nav-bar-item">{tr('goBack')}</a></span>
      </div>
      <div className="main-cat-image-container">
        <img className="main-cat-image" src={`https://http.cat/${statusCode}.jpg`} />
      </div>
    </div>
  )
}

Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<InitialErrorProps> => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return Promise.resolve({
    statusCode,
  })
}

Error.defaultProps = {
  statusCode: 404,
}

export default withTranslation()(Error)
