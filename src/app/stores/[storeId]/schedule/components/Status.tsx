
import React from 'react'

export default function Status({status} : {status? : string}) {  
  if(status === 'pending') {
    return (
      <span className='rounded-50 py-3 px-8 bg-orange-100 caption-12-500 text-orange-400'>Pending</span>
    )
  }

  if(status === 'completed') {
    return (
      <span className='rounded-50 py-3 px-8 bg-green-100 caption-12-500 text-green-400 '>Completed</span>
    )
  }
    
  }