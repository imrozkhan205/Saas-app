import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <div className='lg:px-20 mb-10 px-2'>
      <h1 className='text-2xl mb-5 '>Popular companions</h1>
      <section className='home-section'>
        <CompanionCard
        id="123"
        name="Neura the brainy explorer"
        topic="Neural Network of the Brain"
        subject="science"
        duration={30}
        color="#ffda6e"
        />
        <CompanionCard
        id="456"
        name="Coutsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={30}
        color="#e5d0ff"
        />

        <CompanionCard
        id="789"
        name="Verba the vocabulary builder"
        topic="language"
        subject="English Literature"
        duration={45}
        color="#BDE7FF "
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
        title="Recently completed sessions"
        companions = {recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </div> 
  )
}

export default Page