import React from 'react'
import { homeObjFour } from './Data'
import { InfoSection, Pricing } from '../../components'

const Home = () => {
  return (
    <>
        {/* Notre pramètre est offer par Data */}
        <Pricing />
        <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home