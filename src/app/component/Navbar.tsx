'use client'
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from './DropDown';
import '../css/navbar.css';
import Image from 'next/image';
const options = [
  { label: 'Tiếng Việt', value: 'option1' },
  { label: 'Tiếng Anh', value: 'option2' },
  { label: 'Tiếng pháp', value: 'option3' },
];
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-navigation">
        <ul className='navigation'>
            <li>
            <Link href="/">Events</Link>
            </li>
            <li>
            <Link href="/about">Categories</Link>
            </li>
            <li>
            <Link href="/contact">Venues</Link>
            </li>
            <li>
            <Link href="/contact">FAQ</Link>
            </li>
        </ul>
      </div>
      <div className="search-input">
        <input className='search' type="text" placeholder="Tìm kiếm..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="option_language">
        <div className="icon">
          <Image
              src="/images/Star 1.png"
              className='icon-option'
              priority={true}
              width={15}
              height={15}
              alt="Picture of the author"
          />
          <Dropdown select='select' options={options} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;