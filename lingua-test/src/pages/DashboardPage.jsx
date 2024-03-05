import React from 'react'
import { UserAuth } from '../context/AuthContext'
import LogCard from '../components/LogCard'

export default function DashboardPage () {

    const {user, signout} = UserAuth()

    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <h1>{`Welcome, ${user.name}`}</h1>
            {/* <LogCard /> */}
            <div className="card w-96 shadow-xl bg-green-500">
                <div className="card-body">
                    <div className='flex flex-row justify-around'>
                        <h2 className="card-title">@Niyon</h2>
                        <span>2024-04-03</span>
                    </div>
                    <div className="card w-full bg-white">
                        <div className="card-body">
                            <h2 className="card-title">Dreaming Spanish</h2>
                            <span>2024-04-03</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn" onClick={signout}>Sign Out</button>
            <LogCard />
        </div>
    )
}