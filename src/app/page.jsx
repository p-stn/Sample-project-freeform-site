import React from 'react'
import Header from '@/components/Header/page'
import SectionOne from '@/components/Body/SectionOne/page'
import SectionTwo from "@/components/Body/SectionTwo/page" 
import SectionTree from "@/components/Body/sectionTree/page" 
import SectionFour from "@/components/Body/SectionFour/page" 
import SectionFive from "@/components/Body/SectionFive/page" 
import Footer from "@/components/Footer/page"
export default function page() {
  return (
    <>
    <div className='w-full h-[9000px] container mx-auto font-kalame '>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionTree/>
      <SectionFour/>
      <SectionFive/>
    </div>
      <Footer/>
    </>
  )
}
