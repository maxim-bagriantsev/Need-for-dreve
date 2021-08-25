import React from 'react'
import {Sidebar} from '../components/Sidebar'
import {Slider} from '../components/Slider'
import {Main} from '../components/Main'
import './startPage.scss'
 
export const StartPage = () => {
  return (
    <div className='start'>
      <Sidebar />
      <Main />
      <Slider />
    </div>
  )
}
