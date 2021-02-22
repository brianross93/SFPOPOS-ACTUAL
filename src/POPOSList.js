import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

// const titles = data.map((obj) => {
//   return <h1>{obj.title}</h1>
// })

function POPOSList() {

  const spaces = data.map(( { title, address, images, hours  } ) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        hours={hours}
        image={images[0]}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}





export default POPOSList