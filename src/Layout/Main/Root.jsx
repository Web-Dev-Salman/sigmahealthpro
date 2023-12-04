import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const Root = ({setExpandedMenu}) => {
    const [currentPage, setCurrentPage] = useState('Dashboard');
    return (
        <>
            <section>
                <div >
                <Header currentPage={currentPage} ></Header>
                </div>
                <div className='w-full flex'>
                    <div className='headerBar'>
                        
                        <Sidebar onMenuClick={setCurrentPage}></Sidebar>
                    </div>
                    <div className={` px-6 flex-grow ${setExpandedMenu ? "hidden" : "visible"}`} >
                        <Outlet/>
                        <Footer></Footer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Root
