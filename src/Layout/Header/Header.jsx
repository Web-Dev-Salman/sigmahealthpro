import React from 'react'
import SearchBar from '../../components/Searchbar/SearchBar'
import AvatarIcon from '../../assets/Icon/sigma defult avatar.png'

const Header = ({ currentPage }) => {
  return (
    <div className='flex justify-between items-center px-8 py-[17px]'>
      <div className=' ml-24'>
        <h1 className=' text-2xl'>{currentPage}</h1>
      </div>      
      <div className='flex gap-2 items-center content-center'>
          <SearchBar/>
          <h6>salman@gmail.com</h6>
          <img className='w-10 cursor-pointer' src={AvatarIcon} alt="Avatar"/>
      </div>
    </div>
  )
}

export default Header
