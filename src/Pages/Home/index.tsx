import React from 'react'
import HomeHead from '../../Component/HeadHome'
import Navbar from '../../Component/Navbar'
import OurService from '../../Component/OurService'
import AboutUs from '../../Component/AboutUs'
import WorkFlow from '../../Component/Workflow'
import FAQSection from '../../Component/Faq'

export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeHead />
            <OurService />
            <AboutUs />
            <WorkFlow/>
            <FAQSection/>
        </div>
    )
}
