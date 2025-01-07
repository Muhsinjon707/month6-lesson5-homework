import React from 'react'
import { Routes, Route } from "react-router-dom"
import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import Users from './pages/Users'
import Details from './pages/Details'
import Error from './pages/Error'

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element = {
                <MainLayout>
                    <Home />
                </MainLayout>
            }/>
            <Route path="/users" element = {
                <MainLayout>
                    <Users />
                </MainLayout>
            }/>

            <Route path = "/details/:id" element = {
                <MainLayout>
                    <Details />
                </MainLayout>
            }/>

            <Route path="*" element = {
                <MainLayout>
                    <Error />
                </MainLayout>
            }/>

        </Routes>
    </div>
  )
}

export default App