import React from 'react'
import Featuredinfo from '../components/featuredinfo/Featuredinfo'
import "./home.css"
import Chart from '../components/charts/Chart'
import { userData } from '../dummyData'
import WidgetSm from "../components/widgets/WidgetSm"
import WidgetLg from "../components/widgets/WidgetLg"

function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active"/>
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>
    </div>
  )
}

export default Home