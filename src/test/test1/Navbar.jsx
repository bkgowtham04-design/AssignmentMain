import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Registerss from './task1/Registerss'
import Empman from './task2/Empman'
import Proman from './task3/Proman'

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
        <Link to="/test1/task4" className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200">
          TASK 4
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
        <Route path="task4" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 4 code here</div>} />
        <Route path="task5" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 5 code here</div>} />
        <Route path="task6" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 6 code here</div>} />
        <Route path="task7" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 7 code here</div>} />
        <Route path="task8" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 8 code here</div>} />
        <Route path="task9" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 9 code here</div>} />
        <Route path="task10" element={<div className="p-8 text-center text-zinc-400 text-sm italic">Write your Task 10 code here</div>} />
      </Routes>
    </>
  )
}

export default Navbar
