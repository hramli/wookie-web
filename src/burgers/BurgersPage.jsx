import React from 'react'
import { Layout } from '../layout/Layout'
import { Burgers } from './Burgers'

export function BurgersPage() {
  return (
    <Layout
      component={<Burgers />}>
    </Layout>
  )
}
