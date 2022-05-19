import { useState } from 'react'
import List from '../list/List'

const Sidebar = (params) => {

    const [open, setOpen] = useState(true)

  return (
    <div className={`${open ? "w-72" : "w-20"} duration-500 p-5 pt-8 h-screen bg-dark-purple relative`}>

    <div className={`justify-center absolute cursor-pointer rounded-full -right-3 top-9 border bg-dark-purple  border-drak-purple duration-500 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    </div>

    <ul>
       {
           params.list.map((listTile, key) => (
           <li
           key={key}
           className={`cursor-pointer text-gray-300 items-center hover:bg-light-white rounded-md ${listTile.gap ? 'mt-6' : 'mt-1'}`}
           >
            <List
                svg={listTile.svg}
                title ={listTile.title}
                open={open}
                gap={listTile.gap}
                head={listTile.head}
            />
           </li>
           ))
       }
       </ul>
       
    </div>
  )
}

export default Sidebar