import Error from './_error'
import React from 'react'

interface BadRequestTestProps {}

const BadRequestTest = ({}: BadRequestTestProps): JSX.Element => (
  <div id="page_container">
    <Error statusCode={400} />
  </div>
)


export default BadRequestTest
