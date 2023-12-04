import React from 'react'
import SearchBar from '../../components/Searchbar/SearchBar'
import AvatarIcon from '../../assets/Icon/sigma defult avatar.png'
import Menu from '../../assets/Icon/Menu.png'
import logoIconSigma from '../../assets/Icon/SigmaHealthProIcon.svg';
import logoSigma from '../../assets/Logo/SigmaHealthProLogo.svg';

const Header = ({ currentPage }) => {
  return (
    <div className='flex justify-between items-center p-4 shadow-md'>
        <div className='flex items-center '>
          <img className={`w-[50px] pl-4 duration-500`} src={logoIconSigma} alt="" />
          <img className={`w-[100px] duration-300`} src={logoSigma} alt="" />
          <img className='w-[25px] ml-3 cursor-pointer' src={Menu} alt="" />
          <h1 className='text-2xl ml-12'>{currentPage}</h1>
        </div>
      <div className='flex gap-2 items-center content-center'>
        <SearchBar />
        <h6>salman@gmail.com</h6>
        <img className='w-10 cursor-pointer' src={AvatarIcon} alt="Avatar" />
      </div>
    </div>
  )
}

export default Header
