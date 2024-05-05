import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import user from '../../Assets/users/avatar3.png'

const menuItem = [
    {
        name: 'User',
        icon: <AccountCircleIcon />,
        exact: true,
    },
    {
        name: 'Search',
        icon: 'bi bi-pencil'
    },
    {
        name: 'Cutomers',
        icon: 'bi bi-person'
    },
    {
        name: 'Category',
        icon: 'bi bi-bag-dash'
    },
]

const Sidebar = ({ onCollapse }) => {

    const [inactive, setinactive] = useState(true);

    useEffect(() => {
        onCollapse(inactive);
    }, [inactive, onCollapse])

    return (
        <div className={`${inactive ? "inactive" : "side-menu"}`}>

            <div className='top-section'>
                <div className='logo'>
                    {inactive ? <h1>W</h1> : <h1>Weedday</h1>}
                </div>
                <div className='back-arrow' onClick={() => setinactive(!inactive)}>
                    {inactive ? <ArrowForwardIosIcon className='icon' />
                        : <ArrowBackIosIcon className='icon' />}
                </div>
            </div>


            <div className='divider'></div>

            <div className="main-menu">

                <ul>
                    {menuItem.map((menuItems, index) => (
                        <li key={index}>
                            <div className='link menu-item'>
                                <div className='menu-icon icon'><i className={menuItems.icon}></i></div>
                                <span>{menuItems.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="side-menu-footer">
                <div className='avatar'>
                    <AccountCircleIcon />
                </div>
                <div className='user-info'>
                    <h5>Anudin KK</h5>
                </div>
            </div>
        </div>
    )
}

export default Sidebar