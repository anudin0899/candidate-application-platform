import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';



const Home = ({ component: Component }) => {
    const [inactive, setinactive] = useState(false);

    return (
        <div className="page_wrapper">
            <div className="home">
                <Sidebar onCollapse={(inactive) => {
                    setinactive(inactive);
                }} />
                <div className={`homeContainer ${inactive ? `Con_inactive` : ''}`}>
                    <Header />
                    {Component && <Component />}
                </div>
            </div>
        </div>
    )
}

export default Home