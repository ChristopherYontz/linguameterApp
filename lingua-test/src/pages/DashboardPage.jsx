import LogCard from '../components/LogCard'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function DashboardPage () {

    const {user, signout} = UserAuth()

    return (
        <div className='container min-h-screen'>
            <h1>{`Welcome, ${user.name}`}</h1>
            <LogCard />
            <button className="btn" onClick={signout}>Sign Out</button>
        </div>
    )
}