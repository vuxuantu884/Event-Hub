'use client';
import React from 'react';
import Carousel from './Carousel ';
import '../css/container.css';
// import Dropdown from './DropDown';
import EventDetail from './EventDetail';
import SeeMoreButton from './SeeMoreButton';
import Image from 'next/image';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

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
    img: '/images/image2.png',
  },
  {
    id: 3,
    img: '/images/image3.png',
  },
  {
    id: 4,
    img: '/images/image4.png',
  },
  {
    id: 5,
    img: '/images/image5.png',
  },
  {
    id: 6,
    img: '/images/image6.png',
  },
  {
    id: 7,
    img: '/images/image7.png',
  },
  {
    id: 8,
    img: '/images/image8.png',
  },
  {
    id: 9,
    img: '/images/image9.png',
  },
];
const items: MenuProps['items'] = [
  {
    label: 'Thứ 2',
    key: '1',
  },
  {
    label: 'Thứ 3',
    key: '2',
  },
  {
    label: 'Thứ 4',
    key: '3',
  },
  {
    label: 'Thứ 5',
    key: '4',
  },
];
const item: MenuProps['items'] = [
  {
    label: 'Ca nhạc',
    key: '1',
  },
  {
    label: 'Hát chèo',
    key: '2',
  },
];
const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const menuProp = {
  item,
  onClick: handleMenuClick,
};
export default function Container() {
  return (
    <div>
      <Carousel />
      <div className='main_content'>
        <div className='title_content'>
          <h2 className='title'>Sự Kiện Sắp Tới</h2>
          <div className='filter_content'>
            {/* <Dropdown select='selecOption1' options={options1} />
            <Dropdown select='selecOption2' options={options2} /> */}
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">Dropdown item</button></li>
                <li><button className="dropdown-item" type="button">Dropdown item</button></li>
                <li><button className="dropdown-item" type="button">Dropdown item</button></li>
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
