import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/NavBar'
import { RandomCard } from '../pages/RandomCard'
import { SearchByPartialName } from '../pages/SearchByPartialName'
import { GuessCard } from '../pages/GuessCard'
import { Leaderboard } from '../components/Leaderboard'

export const CartasRouter = () => {

  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/*' element={<Navigate to='/randomCard'/>}/>
            <Route path='/randomCard' element={<RandomCard/>}/>
            <Route path='/searchCoincidence' element={<SearchByPartialName/>}/>
            <Route path='/GuessCard' element={<GuessCard/>}/>
            <Route path='/LeaderBoard' element={<Leaderboard/>}/>
        </Routes>
    </>
  )
}