import Categories from '@/components/Categories'
import { HeroSection } from '@/components/HeroSection'
import Hygiene from '@/components/Hygiene_1'
import MinimeFamily from '@/components/MinimeFamily'
import React from 'react'

export default function Page() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Hygiene></Hygiene>
      <MinimeFamily></MinimeFamily>
    </div>
  )
}
