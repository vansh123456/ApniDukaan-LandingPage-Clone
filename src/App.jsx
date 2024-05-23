import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { BlueCard } from './components/BlueCard'
import Overview from './components/Overview'
import Transactions from './components/Transactions'
import TableTop from './components/TableTop'
import Table from './components/Table'

function App() {

  return (
    <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table/>
         </div>
    </div>
  )
}

export default App
