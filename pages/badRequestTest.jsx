import Error from './_error'
import React from 'react'

const BadRequestTest = ({}) => (
  <div id="page_container">
    <Error statusCode={400} />
  </div>
)

export default BadRequestTest
