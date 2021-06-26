import React from 'react'
import Navbar from "./Navbar"
import "./App.css"
import ShowCase from "./ShowCase"
import HomeCards from "./HomeCards"
import Xbox from "./Xbox"
import HomeCards2 from "./HomeCards2"
import Carbon from "./Carbon";
import Follow from "./Follow"

function App() {

  return (
    <>
       <div className='container'>
               <Navbar/> 
               <ShowCase/> 
               <HomeCards/> 
               <Xbox/>
               <HomeCards2/>
               <Carbon/>
               <Follow/>
       </div>
                
    </>
  )
}

export default App
