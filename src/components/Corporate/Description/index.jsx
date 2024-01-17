import React from 'react'
import Breadcrumb from './Breadcrumb'
import Details from './Details';
import MoreHealth from './MoreHealth';

const index = () => {
  return (
    <div className="pt-28 md:pt-40">
      <Breadcrumb />
      <Details/>
      <MoreHealth/>
    </div>
  );
}

export default index