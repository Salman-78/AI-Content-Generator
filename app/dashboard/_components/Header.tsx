import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import style from './Header.module.css'
import React from 'react'

const Header = () => {
  return (
    <div className={style.parent}>
      <div className={style.cls1}>
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>

      <div className={style.cls2}>
        <h2 className="bg-purple-600 hover:bg-green-600 font-bold mt-1 p-2.5 rounded-sm text-xs text-white flex items-center">
          Join Our MemberShip Just at ₹100 Only
        </h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header


// import { UserButton } from '@clerk/nextjs'
// import { Search } from 'lucide-react'
// import React from 'react'

// const Header = () => {
//   return (
//     <div className='p-4 shadow-sm border-b-2 flex justify-between bg-white items-center'>
//       <div className='flex gap-2 items-center p-1.5 bg-white rounded-md w-80 max-w-xl border-1 border-gray-300 mt-1'>
//         <Search/>
//         <input type="text" placeholder='Search...' className='outline-none '/>
//       </div>
//       <div className='flex gap-5 items-center'>
//         <h2 className='bg-purple-600 hover:bg-green-600 font-bold mt-1 p-2.5 rounded-sm text-xs text-white flex items-center'>Join Our MemberShip Just at ₹100 Only</h2>
//         <UserButton/>
//       </div>
//     </div>
//   )
// }

// export default Header
