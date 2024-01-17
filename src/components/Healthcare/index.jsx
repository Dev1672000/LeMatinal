import React from 'react'
import Breadcrumb from './Breadcrumb'
import Home from './Home'
import Blog1 from '../Home/Blog1'
import Details from './Details'
import MoreHealth from './MoreHealth'

const index = () => {
  return (
    <div className="pt-28 md:pt-40">
      <Breadcrumb />

      <Home />
      {/* <Details/>
      <MoreHealth/> */}
    </div>
  );
}

export default index