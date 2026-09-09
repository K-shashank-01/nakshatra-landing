'use client'

import { useEffect, useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Opening } from '@/components/opening'
import {
  ProductHero,
  Features,
  HowItWorks,
  Architecture,
  Technology,
  BuiltFor,
  Pricing,
  Legal,
  Contact,
  SiteFooter,
} from '@/components/sections'

export default function Page() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setHeaderVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <SiteHeader visible={headerVisible} />
      <main>
        <Opening />
        <ProductHero />
        <Features />
        <HowItWorks />
        <Architecture />
        <Technology />
        <BuiltFor />
        <Pricing />
        <Legal />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
