import React, { useEffect } from 'react'
import Sidebar from './siderNav/siderNav'

// eslint-disable-next-line no-use-before-define

export default function AdminNavbar(props) {

  return (
       <div className="flex">
       <div>
            <Sidebar />
       </div>
            <section className="w-full  bg-gray-200">
               {props.children}
            </section>
        </div>
  )
}