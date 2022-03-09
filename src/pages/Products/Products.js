import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo } from '../HomePage/Data'

const Home = () => {
  return (
    <>
        {/* Notre pramètre est offer par Data */}
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home