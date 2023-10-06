'use client'
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import '../css/EventDetail.css';
import { EnvironmentOutlined, } from '@ant-design/icons';

// @ts-ignore
export default function EventDetail({ eventDetail }) {
  const router = useRouter()
  return(
    <div className="Event" onClick={() => router.push('/page1')}>
        <div>
            <div className="div_img_event">
                <Image
                    src={eventDetail.img}
                    className='img_evnet'
                    priority={true}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className="detail">
                <div className="date_event">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p className="date">{eventDetail.date}</p>
                </div>
                <div className="address_event">
                    <EnvironmentOutlined />
                    <p className="address">{eventDetail.address}</p>
                </div>
                <div className="price_item">
                    <FontAwesomeIcon  icon={faMoneyBill1Wave} />
                    <p className="price">VND {eventDetail.price} +</p>
                </div>
            </div>
            <div className="detail_mobile">
                <div className="date_event_mobile">
                    <div className="text_up">APR</div>
                    <div className="text_down">14</div>
                </div>
                <div className="content_event">
                    <div className="title_content">
                        Wonder Girls 2010 Wonder Girls
                    </div>
                    <div className="content">
                        We’ll get you directly seated and inside 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
