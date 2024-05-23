import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { BlueCard } from './components/BlueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3'>
      <BlueCard title ={"Next Payout"} amount={"2312.93"} orderCount={23}/>
      <RevenueCard title={"Amount Pending"} amount={"92,312,20"} orderCount={13}/>
      <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} orderCount={null}/>
      
    </div>
  )
}

export default App
