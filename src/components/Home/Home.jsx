import React, { Suspense } from 'react'
import Banner from '../Banner'
import RecentFood from '../../pages/RecentFood'
import Loading from '../../pages/Loading'
import Helpfull from '../../pages/Helpfull'
import FoodDetails from '../../pages/FoodDetails'
import Group from '../../pages/Group'
import Followers from '../../pages/Followers'
import Stats from '../../pages/Stats'

const recentFoodspromise=fetch('https://food-lovers-server-blond.vercel.app/recentFood')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
<Banner></Banner>

<Suspense fallback={<Loading></Loading>}>
        <RecentFood recentFoodspromise={recentFoodspromise} />
      </Suspense>
      <Helpfull></Helpfull>
      <FoodDetails></FoodDetails>
      <Group></Group>
      <Followers></Followers>
      <Stats></Stats>
    </div>
  )
}

export default Home