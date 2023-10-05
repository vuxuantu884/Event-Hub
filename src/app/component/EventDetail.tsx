'use client'
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import '../css/EventDetail.css';
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
                    <FontAwesomeIcon  icon={faLocationDot} />
                    <p className="address">{eventDetail.address}</p>
                </div>
                <div className="price_item">
                    <FontAwesomeIcon  icon={faMoneyBill1Wave} />
                    <p className="price">VND {eventDetail.price} +</p>
                </div>
            </div>
        </div>
    </div>
  );
}
