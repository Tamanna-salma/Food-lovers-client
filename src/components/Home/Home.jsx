import React, { Suspense } from 'react'
import Banner from '../Banner'
import RecentFood from '../../pages/RecentFood'
import Loading from '../../pages/Loading'
import Helpfull from '../../pages/Helpfull'


const recentFoodspromise=fetch('http://localhost:3000/recentFood')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
<Banner></Banner>
{/* <RecentFood recentFoodspromise={recentFoodspromise}></RecentFood> */}
<Suspense fallback={<Loading></Loading>}>
        <RecentFood recentFoodspromise={recentFoodspromise} />
      </Suspense>
      <Helpfull></Helpfull>
    </div>
  )
}

export default Home