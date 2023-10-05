'use client'
import Image from 'next/image'
import Navbar from './Navbar';
import '../css/header.css';
function MyApp() {
  return (
    <div className='header'>
      <div className="header_left">
            <Image
                src="/images/Barcode.png"
                priority={true}
                width={100}
                height={50}
                alt="Picture of the author"
            />
        </div>
      <Navbar />
      
    </div>
  );
}

export default MyApp;