import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const Root = () => {
    const [currentPage, setCurrentPage] = useState('Dashboard');
    return (
        <>
            <section className='flex'>
                <div >
                    <Sidebar onMenuClick={setCurrentPage}></Sidebar>
                </div>
                <div className='w-full'>
                    <div>
                        <Header currentPage={currentPage} ></Header>
                    </div>
                    <div className='px-3'>
                        <Outlet/>
                    </div>
                    <div>
                        <Footer></Footer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Root
