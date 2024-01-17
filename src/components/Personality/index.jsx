import React from 'react'
import Breadcrumb from './Breadcrumb'
import Home from './Home'
import Blog1 from '../Home/Blog1'

const index = () => {
  return (
    <div className="pt-28 md:pt-40">
      <Breadcrumb />

      <Home />
    </div>
  );
}

export default index