'use client'
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
// import { faZalo } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import '../css/footer.css';
// @ts-ignore
export default function footer() {
  return(
    <div className="footer">
        <div className="block_footer">
            <div className="footer_left">
                <Image
                    src="/images/Barcode.jpg"
                    className='img_barcode_footer'
                    priority={true}
                    width={100}
                    height={50}
                    alt="Picture of the author"
                />
                <div className="company_address">
                    <FontAwesomeIcon  icon={faLocationDot} />
                    <p className="address">Địa chỉ: Tầng 12 Tòa nhà Diamond Flower, số 48 Lê Văn Lương, Khu đô thị mới N1, phường Nhân Chính, quận Thanh Xuân, Hà Nội</p>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="phone_number">0766996672</p>
                </div>
                <div className="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="Email_contact">cskh@boment.com.vn</p>
                </div>
                <div className="social_network">
                    {/* <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                    <FontAwesomeIcon icon={faZalo} /> */}
                </div>
            </div>
            <div className="footer_center">
                <div className="block_center">
                    <Link href="/">Danh mục</Link>
                    <Link href="/">Giới thiệu</Link>
                    <Link href="/">Phương thức thanh toán</Link>
                    <Link href="/">Chính sách bảo mật và các điều khoản</Link>
                    <Link href="/">Hướng dẫn đặt vé</Link>
                    <Link href="/">Các câu hỏi thường gặp</Link>
                    <Link href="/">Chính sách và các điều khoản sử dụng khác</Link>
                </div>
            </div>
            <div className="footer_right">
                <div className="block_right">
                    <p className="pay">Thanh toán</p>
                    <div className="category_pay">
                        <Link href="/">
                            <Image
                                src="/images/Mastercard-logo.png"
                                priority={true}
                                width={50}
                                height={20}
                                alt="Picture of the author"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/Visa.png"
                                priority={true}
                                width={50}
                                height={20}
                                alt="Picture of the author"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/Visa_Inc.png"
                                priority={true}
                                width={50}
                                height={20}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>
                    <div className="img_login">
                            <Image
                                src="/images/img_login.png"
                                priority={true}
                                width={250}
                                height={70}
                                alt="Picture of the author"
                            />
                    </div>
                </div>
            </div>
        </div>
        <p className="text_footer">Copyright © 2023 bomentertainment</p>
    </div>
  );
}
