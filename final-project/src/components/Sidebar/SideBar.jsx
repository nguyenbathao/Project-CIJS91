import './SideBar.css'

import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'

import {SideBarContext} from '../../context/SideBarContext'

const SideBar = () => {
    // const {isOpen, handleClose} = useContext(SideBarContext)
    return (
    <div className='sidebar-container'>SideBar</div>
  )
}

export default SideBar