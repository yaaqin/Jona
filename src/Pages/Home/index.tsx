import React from 'react'
import HomeHead from '../../Component/HeadHome'
import Navbar from '../../Component/Navbar'
import OurService from '../../Component/OurService'
import AboutUs from '../../Component/AboutUs'
import WorkFlow from '../../Component/Workflow'
import FAQSection from '../../Component/Faq'

export default function Home() {
    return (
        <div className='max-w-screen overflow-hidden pt-20 z-10'>
            <section className='fixed top-0 w-full z-50'>
                <Navbar />
            </section>
            <HomeHead />
            <OurService />
            <AboutUs />
            <WorkFlow />
            <FAQSection />
        </div>
    )
}
