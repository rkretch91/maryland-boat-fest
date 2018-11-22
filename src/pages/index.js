import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Form from '../components/form'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px' }}>
      <Image />
    </div>
    <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '20px', textAlign: 'center' }}>
      <h2>We are under construction at the moment! Please feel free to get in touch.</h2>
      <Form/>
    </div>
  </Layout>
)

export default IndexPage
