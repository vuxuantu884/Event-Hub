'use client';
import React from 'react';
import Carousel from './Carousel ';
import '../css/container.css';
// import Dropdown from './DropDown';
import EventDetail from './EventDetail';
import SeeMoreButton from './SeeMoreButton';
import Image from 'next/image';
// import { Button, Dropdown, message, Space, Tooltip } from 'antd';
// import { DownOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const options1 = [
  { label: 'Tuần này', value: 'option1' },
  { label: 'Tiếng Anh', value: 'option2' },
  { label: 'Tiếng pháp', value: 'option3' },
];
const options2 = [
  { label: 'Loại sự kiện', value: 'option1' },
  { label: 'Tiếng Anh', value: 'option2' },
  { label: 'Tiếng pháp', value: 'option3' },
];
const eventDetail = {
  img: '/images/Event2.png',
  date: '22/12/2023',
  address: 'Hà Nội',
  price: '2.000.000',
};
const eventDetail2 = {
  img: '/images/Event1.png',
  date: '22/12/2023',
  address: 'Hà Nội',
  price: '2.000.000',
};
const listImages = [
  {
    id: 1,
    img: '/images/image 4.svg',
  },
  {
    id: 2,
    img: '/images/image2.svg',
  },
  {
    id: 3,
    img: '/images/image3.svg',
  },
  {
    id: 4,
    img: '/images/image4.svg',
  },
  {
    id: 5,
    img: '/images/image5.svg',
  },
  {
    id: 6,
    img: '/images/image6.svg',
  },
  {
    id: 7,
    img: '/images/image7.svg',
  },
  {
    id: 8,
    img: '/images/image8.svg',
  },
  {
    id: 9,
    img: '/images/image9.svg',
  },
];
// const items: MenuProps['items'] = [
//   {
//     label: 'Thứ 2',
//     key: '1',
//   },
//   {
//     label: 'Thứ 3',
//     key: '2',
//   },
//   {
//     label: 'Thứ 4',
//     key: '3',
//   },
//   {
//     label: 'Thứ 5',
//     key: '4',
//   },
// ];
// const item: MenuProps['items'] = [
//   {
//     label: 'Ca nhạc',
//     key: '1',
//   },
//   {
//     label: 'Hát chèo',
//     key: '2',
//   },
// ];
// const handleMenuClick: MenuProps['onClick'] = (e) => {
//   message.info('Click on menu item.');
//   console.log('click', e);
// };
// const menuProps = {
//   items,
//   onClick: handleMenuClick,
// };
// const menuProp = {
//   item,
//   onClick: handleMenuClick,
// };
export default function Container() {
  const router = useRouter()
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  return (
    <div>
      <div className="block_coursel" onClick={() => router.push('/page1')}>
        <Carousel />
      </div>
      <div className='main_content'>
        <div className='title_content'>
          <h2 className='title'>Sự Kiện Sắp Tới</h2>
          <div className='filter_content'>
            {/* <Dropdown select='selecOption1' options={options1} />
            <Dropdown select='selecOption2' options={options2} /> */}
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle button_week" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuần này
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Thứ 2</a></li>
                <li><a className="dropdown-item" href="#">Thứ 3</a></li>
                <li><a className="dropdown-item" href="#">Thứ 4</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle button_event" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Loại sự kiện
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Kpop</a></li>
                <li><a className="dropdown-item" href="#">BTS</a></li>
                <li><a className="dropdown-item" href="#">Son Tung</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='list_event'>
          <EventDetail eventDetail={eventDetail} />
          <EventDetail eventDetail={eventDetail2} />
          <EventDetail eventDetail={eventDetail} />
          <EventDetail eventDetail={eventDetail2} />
        </div>
        <div className='see_more'>
          <SeeMoreButton />
        </div>
      </div>
      <div className='Donors_one'>
        {listImages.map((item, idx) => {
          return (
            <div className='block_img' key={idx}>
              <Image
                src={item.img}
                className='img_donors'
                priority={true}
                width={100}
                height={100}
                alt='Picture of the author'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
