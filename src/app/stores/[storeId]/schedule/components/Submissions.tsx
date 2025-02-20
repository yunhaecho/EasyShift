"use client"

import React, { useState } from 'react';

export default function Submissions() {
  const total = 17; 
  const [current, setCurrent]  = useState(0);//assignUsers값
  const currentWidth = ((current / total) * 100).toFixed(0);
  
  const handleIncrease = () => {
    if( current < total) {
      setCurrent( current + 1)
    }
  };

  return (
    <div className='flex flex-row gap-8 items-center justify-start'>
      <div className='rounded-50 bg-gray-300 w-160 h-10'>
        <div 
          style={{ width: `${currentWidth}%`}}
          className='rounded-50 bg-gray-900 h-full transition-all ease-in-out duration-500'
          role='progressBar'
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}>

        </div>
      </div>
      <div>
        {`${current}/${total}`}
      </div>
      {/* 임시 */}
      <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        ></button>
    </div>
  )
}


