import React from 'react'
import Home from './Home'
import H1 from './H1'
import Men from '../Home/Men'
import Blog1 from '../Home/Blog1'
import Blog2 from '../Home/Blog2'
import Hero from '../Home/Hero'
import Main from './Main'


const index = () => {
  return (
    <div className='pt-20 md:pt-40'>
      <Main/>
        <Home/>
        {/* <H1/> */}
        {/* <Men/> */}
        {/* <Blog1/> */}
        {/* <Blog2/> */}
        {/* <Hero/> */}
    </div>
  )
}

export default index