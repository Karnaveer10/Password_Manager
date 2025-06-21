import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#412198] p-4 w-screen  '>
      <div className="title  font-bold text-white max-px-40 text-2xl"><span className="text-yellow-400">&lt;</span>/Pass<span className='text-yellow-400'>Ops/&gt;</span></div>
      <ul className='flex gap-3 text-yellow-400 max-px-40 font-semibold '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
