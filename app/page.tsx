import Categories from '@/components/Categories'
import { HeroSection } from '@/components/HeroSection'
import Hygiene from '@/components/Hygiene_1'
import React from 'react'

export default function Page() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Hygiene></Hygiene>
    </div>
  )
}
