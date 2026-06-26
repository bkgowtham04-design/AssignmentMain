import React from 'react'

import Navbar from '../componets/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Task from '../pages/Task';
import Profile from '../pages/Profile';

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


const AppRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
        <Route path='/profile' element={<Profile />} />

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
    </>
  )
}


export default AppRoutes