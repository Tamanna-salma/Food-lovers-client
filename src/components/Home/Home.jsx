import React from 'react'
import Banner from '../Banner'
import RecentFood from '../../pages/RecentFood'
import Error from '../../pages/Error'

const recentFoodspromise=fetch('http://localhost:3000/recentFood')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
<Banner></Banner>
<RecentFood recentFoodspromise={recentFoodspromise}></RecentFood>
<Error></Error>
    </div>
  )
}

export default Home