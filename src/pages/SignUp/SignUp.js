import React from 'react'
import { homeObjFour } from './Data'
import { InfoSection } from '../../components'

const Home = () => {
  return (
    <>
        {/* Notre pramètre est offer par Data */}
        <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home