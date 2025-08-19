import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const setting = () => {
  return (
    <div className='flex items-center justify-center m-7'>
      <UserProfile/>
    </div>
  )
}

export default setting
