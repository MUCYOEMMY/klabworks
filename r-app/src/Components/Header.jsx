import Image from '../asset/images/logo.svg'
import './css/Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    
    <div className="header">
<div className='image'>
      <img src={Image} alt=""/></div>
     <a href="">Home</a>
      <a href="">New</a>
      <a href="">Popular</a>
      <a href="">Trending</a>
      <a href="">Categories</a>
      <a href="#" className='icon'><GiHamburgerMenu className='icons'/></a> 
   </div>
  )
}

export default Header
