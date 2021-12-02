import React from 'react'
import { Layout } from '../layout/Layout'
import { NotFound } from './NotFound'

export function NotFoundPage() {
  return (
    <Layout
      showNavMenu={false}
      component={<NotFound />}>
    </Layout>
  )
}
