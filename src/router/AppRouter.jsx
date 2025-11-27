import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { YugiohApp } from '../yugiohApp'
import { CartasRouter } from '../cartasYGO/routes/CartasRouter'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { CheckingAuth } from '../ui/CheckingAuth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NavBar } from '../ui/NavBar'

export const AppRouter = () => {

  const { status } = useCheckAuth();
  if (status === 'checking') {

    return <CheckingAuth />;
  }
  return (
    <>

      <Routes>
        {
          (status === 'authenticated') ? <Route path='/*' element={<CartasRouter />} />
            : <Route path='/*' element={<AuthRoutes />} />
        }



      </Routes>
    </>
  )
}
