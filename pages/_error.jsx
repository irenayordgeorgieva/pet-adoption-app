import PropTypes from 'prop-types'
import React from 'react'
import { useRouter } from 'next/router'
import { withTranslation } from '../lib/i18n'

const Error = ({ statusCode, t: tr }) => {
  const router = useRouter()
  return (
    <div id="page_container">
      <h1>{`Error ${statusCode}`}</h1>
      <div className="nav-bar">
        <span onClick={() => router.back()}><a className="nav-bar-item">{tr('goBack')}</a></span>
      </div>
      <div className="main-cat-image-container">
        <img className="main-cat-image" src={`https://http.cat/${statusCode}.jpg`} />
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode

  return {
    statusCode,
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
}

Error.defaultProps = {
  statusCode: 404,
}

export default withTranslation()(Error)
