import React from 'react'
import SearchBar from '../../components/Searchbar/SearchBar'
import AvatarIcon from '../../assets/Icon/sigma defult avatar.png'

const Header = ({ currentPage }) => {
  return (
    <div className='flex justify-between headerBar items-center px-8 py-[17px]'>
      <div>
        <h2>{currentPage}</h2>
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
