import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { YugiohApp } from '../yugiohApp'
import { CartasRouter } from '../cartasYGO/routes/CartasRouter'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<CartasRouter/>}/>
            
        </Routes>
    </>
  )
}
