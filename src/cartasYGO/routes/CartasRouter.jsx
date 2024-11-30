import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/NavBar'
import { RandomCard } from '../pages/RandomCard'
import { SearchByPartialName } from '../pages/SearchByPartialName'
import { GuessCard } from '../pages/GuessCard'

export const CartasRouter = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/*' element={<SearchByPartialName/>}/>
            <Route path='/randomCard' element={<RandomCard/>}/>
            <Route path='/searchCoincidence' element={<SearchByPartialName/>}/>
            <Route path='/GuessCard' element={<GuessCard/>}/>
        </Routes>
    </>
  )
}
