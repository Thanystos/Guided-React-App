import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import { Pricing } from '../../components'

const Home = () => {
  return (
    <>
        {/* Notre pramètre est offer par Data */}
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Pricing />
        <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home