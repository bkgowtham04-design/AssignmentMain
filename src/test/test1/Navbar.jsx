import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Registerss from './task1/Registerss'
import Empman from './task2/Empman'
import Proman from './task3/Proman'
import Regform from './test4/Regform'
import Conbook from './task5/Conbook'
import Courseenroll from './task6/Courseenroll'
import Libbook from './task7/Libbook'
import Vehiclereg from './task8/Vehiclereg'
import Patientreg from './task9/Patientreg'
import Jobportal from './task10/Jobportal'

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-150 px-6 py-3 flex justify-center gap-6 text-xs font-semibold uppercase tracking-wider flex-wrap">
        <Link to="/test1/task1" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 1
        </Link>
        <Link to="/test1/task2" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 2
        </Link>
        <Link to="/test1/task3" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 3
        </Link>
        <Link to="/test1/test4" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TEST 4
        </Link>
        <Link to="/test1/task5" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 5
        </Link>
        <Link to="/test1/task6" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 6
        </Link>
        <Link to="/test1/task7" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 7
        </Link>
        <Link to="/test1/task8" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 8
        </Link>
        <Link to="/test1/task9" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 9
        </Link>
        <Link to="/test1/task10" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 10
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Registerss />} />
        <Route path="task1" element={<Registerss />} />
        <Route path="task2" element={<Empman />} />
        <Route path="task3" element={<Proman />} />
        <Route path="test4" element={<Regform />} />
        <Route path="task5" element={<Conbook />} />
        <Route path="task6" element={<Courseenroll />} />
        <Route path="task7" element={<Libbook />} />
        <Route path="task8" element={<Vehiclereg />} />
        <Route path="task9" element={<Patientreg />} />
        <Route path="task10" element={<Jobportal />} />
      </Routes>
    </>
  )
}

export default Navbar
