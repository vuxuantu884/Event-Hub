'use client';
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faZalo } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

import { EnvironmentOutlined, MailOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';
import '../css/footer.css';
// @ts-ignore
export default function footer() {
  return (
    <div className='footer'>
      <div className='flex justify-between block_footer'>
        <div className='footer_left'>
          <Image
            src='/images/Barcode.svg'
            className='img_barcode_footer'
            priority={true}
            width={200}
            height={70}
            alt='Picture of the author'
          />
          <div className='company_address'>
            <EnvironmentOutlined />
            <p className='address'>
              Địa chỉ: Tầng 12 Tòa nhà Diamond Flower, số 48 Lê Văn Lương, Khu đô thị mới N1, phường
              Nhân Chính, quận Thanh Xuân, Hà Nội
            </p>
          </div>
          <div className='contact'>
            <MailOutlined />
            <p className='phone_number'>0766996672</p>
          </div>
          <div className='Email'>
            <MailOutlined />
            <p className='Email_contact'>cskh@boment.com.vn</p>
          </div>
          <div className='social_network'>
            {/* <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                    <FontAwesomeIcon icon={faZalo} /> */}
              <div className="icon_netword">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M21.4629 0.272522H4.49414C2.55579 0.272522 0.978516 1.84979 0.978516 3.78815V20.7569C0.978516 22.6953 2.55579 24.2725 4.49414 24.2725H11.5723V15.7881H8.75977V11.5694H11.5723V8.71002C11.5723 6.38367 13.4647 4.49127 15.791 4.49127H20.0566V8.71002H15.791V11.5694H20.0566L19.3535 15.7881H15.791V24.2725H21.4629C23.4012 24.2725 24.9785 22.6953 24.9785 20.7569V3.78815C24.9785 1.84979 23.4012 0.272522 21.4629 0.272522Z" fill="black"/>
                </svg>
              </div>
              <div className="icon_netword">
                <MessageOutlined />
              </div>
              <div className="icon_netword">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M5.93048 24.6386C5.69098 24.5895 5.44489 24.5488 5.20539 24.4907C4.00955 24.2016 2.94505 23.5202 2.18177 22.5552C1.4185 21.5903 1.00046 20.3975 0.994383 19.1672C0.973227 14.6874 0.973227 10.2075 0.994383 5.7277C1.00935 3.06027 2.89182 0.855073 5.50716 0.355715C5.77126 0.305275 6.03943 0.27922 6.30829 0.277879C7.82193 0.270095 9.33497 0.273087 10.8486 0.273087C10.9037 0.270611 10.9575 0.28998 10.9983 0.326976C10.9151 0.367691 10.8318 0.409604 10.748 0.446726C8.16202 1.6592 6.0628 3.41533 4.69705 5.95523C2.66669 9.73274 3.19239 14.1832 6.02867 17.5111C6.64179 18.2296 6.67353 18.6541 6.23105 19.487C5.90114 20.1073 5.4401 20.5983 4.87907 21.009C4.7159 21.1229 4.56375 21.2518 4.42462 21.394C4.15399 21.682 4.22464 21.9383 4.60125 22.073C4.69469 22.1065 4.79212 22.1276 4.89105 22.1358C6.16399 22.243 7.38005 22.049 8.46678 21.3491C9.29006 20.8192 10.1044 20.7467 11.0133 21.1234C12.7568 21.8461 14.5746 22.2538 16.4721 22.243C19.4523 22.2259 22.1736 21.3778 24.636 19.6989C24.7097 19.6486 24.7833 19.5971 24.8588 19.5486C24.8979 19.5383 24.9381 19.532 24.9785 19.5301C24.9097 19.8953 24.8785 20.2486 24.7731 20.5821C24.0511 22.8448 22.5428 24.2165 20.17 24.5901C20.1223 24.6016 20.0758 24.6174 20.031 24.6374L5.93048 24.6386Z" fill="black"/>
                  <path d="M10.6309 8.6269C9.8669 8.6269 9.16037 8.63408 8.45385 8.6269C7.96227 8.62031 7.71858 8.18741 7.99041 7.78386C8.03954 7.71928 8.1015 7.66557 8.17239 7.6261C8.24329 7.58663 8.32158 7.56226 8.40235 7.55453C9.48669 7.53657 10.5722 7.53298 11.6566 7.55872C11.8326 7.56292 12.0757 7.69404 12.1619 7.84014C12.308 8.09401 12.2781 8.39817 12.0948 8.65803C11.2746 9.82041 10.4541 10.9826 9.63338 12.1446C9.58848 12.2086 9.54597 12.2751 9.4813 12.3721C9.56054 12.386 9.6405 12.3954 9.7208 12.4002C10.3483 12.4002 10.9782 12.4002 11.6027 12.4002C11.6921 12.3965 11.7817 12.4009 11.8703 12.4134C12.2655 12.487 12.4571 12.6954 12.4379 13.0199C12.4194 13.3289 12.1445 13.5852 11.7793 13.5887C10.7141 13.5977 9.64895 13.5989 8.58377 13.5852C8.31134 13.5822 8.03352 13.4918 7.91257 13.2163C7.79163 12.9409 7.84192 12.6619 8.02454 12.4008C8.83585 11.244 9.63698 10.0807 10.4417 8.91969C10.4962 8.83945 10.5471 8.75683 10.6309 8.6269Z" fill="black"/>
                  <path d="M15.814 13.131C14.7614 14.0812 13.0238 13.4717 12.719 11.9581C12.4346 10.5438 13.104 9.29304 14.4021 8.97869C14.9667 8.84158 15.4421 8.99546 15.7607 9.4038C15.9726 9.27567 16.1582 9.09605 16.3732 9.04934C16.7253 8.9727 16.9474 9.1655 16.9827 9.52834C17.0144 9.85406 17.0103 10.1834 17.0121 10.5115C17.0156 11.218 17.0156 11.9245 17.0121 12.6311C17.0134 12.7803 17.0036 12.9294 16.9827 13.0771C16.9426 13.3316 16.8157 13.5286 16.5456 13.5813C16.2756 13.634 16.057 13.537 15.9098 13.2981C15.8786 13.246 15.8511 13.1909 15.814 13.131ZM14.82 10.1223C14.4296 10.1181 14.1614 10.3019 13.9968 10.6522C13.8957 10.8582 13.8432 11.0847 13.8432 11.3141C13.8432 11.5436 13.8957 11.77 13.9968 11.976C14.1907 12.3916 14.5811 12.5844 15.0296 12.4856C15.4781 12.3868 15.7876 11.9335 15.808 11.3408C15.8313 10.636 15.4122 10.1181 14.82 10.1193V10.1223Z" fill="black"/>
                  <path d="M21.2816 13.5888C19.9859 13.5834 19.0662 12.6386 19.1183 11.2938C19.1716 9.8526 19.9099 8.95867 21.3038 8.96705C22.624 8.97304 23.3653 9.89212 23.4694 11.3297C23.5569 12.5919 22.5252 13.5942 21.2816 13.5888ZM22.1947 11.3824C22.1863 11.1986 22.1875 11.0986 22.1755 10.9998C22.1091 10.4609 21.8432 10.1616 21.4032 10.122C20.8846 10.0795 20.5649 10.3178 20.3913 10.8519C20.3298 11.0415 20.307 11.2416 20.3241 11.4401C20.3413 11.6387 20.3981 11.8319 20.4913 12.0081C20.6709 12.3674 20.9936 12.5422 21.396 12.5009C21.7983 12.4596 22.0306 12.247 22.1288 11.8291C22.158 11.6814 22.1792 11.5323 22.1923 11.3824H22.1947Z" fill="black"/>
                  <path d="M17.5186 10.3292C17.5186 9.45322 17.512 8.57725 17.5186 7.70188C17.5239 7.19713 17.8964 6.91272 18.3233 7.07558C18.6484 7.19893 18.7083 7.48214 18.7083 7.78391C18.7119 8.60958 18.7083 9.43586 18.7083 10.2621C18.7083 11.1381 18.7125 12.0141 18.7083 12.89C18.7047 13.3756 18.5238 13.584 18.1269 13.5906C17.7179 13.5972 17.5227 13.4038 17.5192 12.9571C17.5138 12.0811 17.5186 11.2052 17.5186 10.3292Z" fill="black"/>
                </svg>
              </div>
              <div className="icon_netword">
                <SendOutlined />
              </div>
              
          </div>
        </div>
        <div className='footer_center'>
          <div className='block_center'>
            <Link href='/'>Danh mục</Link>
            <Link href='#'>Giới thiệu</Link>
            <Link href='/'>Phương thức thanh toán</Link>
            <Link href='/'>Chính sách bảo mật và các điều khoản</Link>
            <Link href='/instruction'>Hướng dẫn đặt vé</Link>
            <Link href='/'>Các câu hỏi thường gặp</Link>
            <Link href='/'>Chính sách và các điều khoản sử dụng khác</Link>
          </div>
        </div>
        <div className='footer_right'>
          <div className='block_right'>
            <p className='pay'>Thanh toán</p>
            <div className='category_pay'>
              <Link href='/'>
                <Image
                  src='/images/Mastercard-logo.png'
                  priority={true}
                  width={50}
                  height={20}
                  alt='Picture of the author'
                />
              </Link>
              <Link href='/'>
                <Image
                  src='/images/Visa.png'
                  priority={true}
                  width={50}
                  height={20}
                  alt='Picture of the author'
                />
              </Link>
              <Link href='/'>
                <Image
                  src='/images/Visa_Inc.png'
                  priority={true}
                  width={50}
                  height={20}
                  alt='Picture of the author'
                />
              </Link>
            </div>
            <div className='img_login'>
              <Image
                src='/images/img_login.png'
                priority={true}
                width={200}
                height={70}
                alt='Picture of the author'
              />
            </div>
          </div>
        </div>
      </div>
      <p className='text_footer'>Copyright © 2023 bomentertainment</p>
    </div>
  );
}
