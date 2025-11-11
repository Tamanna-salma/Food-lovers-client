import React from 'react'
import Banner from '../Banner'
import RecentFood from '../../pages/RecentFood'

const recentFoodspromise=fetch('http://localhost:3000/recentFood')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
<Banner></Banner>
<RecentFood recentFoodspromise={recentFoodspromise}></RecentFood>
    </div>
  )
}

export default Home