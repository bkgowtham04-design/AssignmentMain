import React from 'react'

import Navbar from '../componets/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Task from '../pages/Task';
import Profile from '../pages/Profile';
import Practice from '../pages/Practice';

// Day1 components (existing in your workspace)
import Day1BannerNavbar from '../assign/day1/banner/Navbar';
import StudentProfile from '../assign/day1/StudentProfile';
import CompanyInfo from '../assign/day1/CompanyInfo';
import EmployeeCard from '../assign/day1/EmployeeCard';
import MovieDetails from '../assign/day1/MovieDetails';
import ProductCard from '../assign/day1/ProductCard';

// Day2 components
// (Day2 Banner/Navbar available if needed)
import Day2Home from '../assign/day2/pagesin/Home';
import Day2About from '../assign/day2/pagesin/About';
import Contact from '../assign/day2/pagesin/Contact';
import Login from '../assign/day2/pagesin/Login';
import Register from '../assign/day2/pagesin/Register';
import Day2Navbar from '../assign/day2/Navbar';
import Day3Home from '../assign/day3/Day3Home';
import Day4App from '../assign/day4/App';
import Day5Home from '../assign/day5/Day5Home';
import Day6App from '../assign/day6/App';
import Day7AppRoute from '../assign/day7/routes/AppRoutes';

import Navbarm from '../assign/day8/Navbarm';
import Navbarr from '../assign/day9/Navbarr';
import Navbart from '../assign/day10/Navbart';
import Navbark from '../assign/day11/Navbark';

import Day12Routes from '../assign/day12/AppRoutes';
import Mainn from '../test/test1/Mainn';
import Test2 from '../test/test2/Test2';
import Test3 from '../test/test3/Test3';
import Test4 from '../test/test4/Test4';
import Test5 from '../test/test5/Test5';
import Test6 from '../test/test6/Test6';
import Test7 from '../test/test7/Test7';
import Test8 from '../test/test8/Test8';
import Test9 from '../test/test9/Test9';
import Test10 from '../test/test10/Test10';
import Practice1 from '../practice/practice1/Practice1';
import Practice2 from '../practice/practice2/Practice2';
import Practice3 from '../practice/practice3/Practice3';
import Practice4 from '../practice/practice4/Practice4';
import Practice5 from '../practice/practice5/Practice5';


const AppRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/practice' element={<Practice />} />

        {/* Day 1 routes */}
        <Route path='/day1' element={<Day1BannerNavbar/>} />
        <Route path='/day1/profile' element={<StudentProfile/>} />
        <Route path='/day1/company' element={<CompanyInfo/>} />
        <Route path='/day1/employee' element={<EmployeeCard/>} />
        <Route path='/day1/movie' element={<MovieDetails/>} />
        <Route path='/day1/product' element={<ProductCard/>} />

        {/* Day 2 routes */}
        <Route element={<Day2Navbar/>}>
          <Route path='/day2' element={<Day2Home/>} />
          <Route path='/day2/about' element={<Day2About/>} />
          <Route path='/day2/contact' element={<Contact/>} />
          <Route path='/day2/login' element={<Login/>} />
          <Route path='/day2/register' element={<Register/>} />
        </Route>
        {/* Day 3 route */}
        <Route path='/day3' element={<Day3Home/>} />
        {/* Day 4 route */}
        <Route path='/day4/*' element={<Day4App/>} />
        {/* Day 5 route */}
        <Route path='/day5' element={<Day5Home/>} />
        {/* Day 6 route */}
        <Route path='/day6/*' element={<Day6App/>} />
        <Route path='/day7/*' element={<Day7AppRoute/>}/>

        <Route path='/day8/*' element={<Navbarm/>}/>
       <Route path='/day9/*' element={<Navbarr/>}/>
       <Route path='/day10/*' element={<Navbart/>}/>

        <Route path='/day11/*' element={<Navbark/>}/>

        <Route path='/day12/*' element={<Day12Routes/>}/>

  </Routes>

  <Routes>
    <Route path='/test1/*' element={<Mainn/>}/>
    <Route path='/test2/*' element={<Test2/>}/>
    <Route path='/test3/*' element={<Test3/>}/>
    <Route path='/test4/*' element={<Test4/>}/>
    <Route path='/test5/*' element={<Test5/>}/>
    <Route path='/test6/*' element={<Test6/>}/>
    <Route path='/test7/*' element={<Test7/>}/>
    <Route path='/test8/*' element={<Test8/>}/>
    <Route path='/test9/*' element={<Test9/>}/>
    <Route path='/test10/*' element={<Test10/>}/>
    <Route path='/practice1/*' element={<Practice1/>}/>
    <Route path='/practice2/*' element={<Practice2/>}/>
    <Route path='/practice3/*' element={<Practice3/>}/>
    <Route path='/practice4/*' element={<Practice4/>}/>
    <Route path='/practice5/*' element={<Practice5/>}/>
  </Routes>
    </>
  )
}


export default AppRoutes