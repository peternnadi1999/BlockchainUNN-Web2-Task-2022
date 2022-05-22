import React,{useState} from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

export default function NavContainer(){
    const [sidebarOpen, setsidebarOpen]= useState(false);
    const menuHandler =()=>{
    setsidebarOpen(true)
    }
    const menuHandlerclose=()=>{
    setsidebarOpen(false);
    }
    return(
    <>
        <Nav click={menuHandler}/>
        <Sidebar show={sidebarOpen} click={menuHandlerclose}/>
     </>
    )
}