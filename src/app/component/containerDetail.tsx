'use client'
import '../css/containerDetail.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { faClock, faCalendarDays, faLocationDot, faMoneyBill1Wave, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import '../css/Cart.css';

const listCart = [
    {
        name: 'Hoàng Hôn',
        price: '1.100.000',
    },
    {
        name: 'Chiều tà',
        price: '1.100.000',
    },
    {
        name: 'Chạng vạng',
        price: '1.100.000',
    },
    {
        name: 'Chập choạng',
        price: '1.100.000',
    },
    {
        name: 'Nhá nhem',
        price: '1.100.000',
    },
]
function containerDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <div className='containerDetail'>
        <div className="block_img_detail">
            <Image
                src="/images/img_detail.jpg"
                className='img_detail'
                priority={true}
                width={1920}
                height={500}
                alt="Picture of the author"
            />
            <div className="information_Book_ticket">
                <div className="book_ticket">
                    <div className="information_ticker">
                        <h2 className="title_event">
                            SBS MTV The Kpop
                        </h2>
                        <div className="hours_event">
                            <FontAwesomeIcon icon={faClock} />
                            <p className="house">18:00</p>
                        </div>
                        <div className="date_detail_event">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <p className="date">Ngày 21 Tháng 10 Năm 2023</p>
                        </div>
                        <div className="locate_event">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="locate">Trung tâm Hội nghị Adora Center, 431 Hoàng Văn Thụ, Phường 4, Tân Bình, Hồ Chí Minh</p>
                        </div>
                        <div className="price_ticket">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} />
                            <p className="price">Vé VVIP: 4.600.000, Vé VIP: 3.800.000, Vé Platinum A: 2.000.000, Vé Platinum B: 1.500.000,</p>
                        </div>
                    </div>
                    <div className="ticket">
                        <button className='button_book' onClick={showModal}>
                            <p className="text_button">MUA NGAY</p>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                        <div className="book_ticker_online">
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network1.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network2.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network3.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network4.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network5.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="st-remove-label">
                                <Image
                                    src="/images/network6.svg"
                                    className='img_logo'
                                    priority={true}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div id="contact_support">
                            <p>Liên hệ bộ phận chăm sóc khách hàng</p>
                            <p>Email: ticketgo.vn@gmail.com</p>
                            <p>vui lòng gọi: <a href="tel:0899980818"><b>08.999.80.818</b></a> - <a href="tel:02437880099"><b>0243.788.00.99</b></a></p>
                        </div>
                    </div>
                </div>
                <div className="event_introduction">
                    <div id="ticket-desc">
                        <h2 className="ticket_title">GIỚI THIỆU VỀ SỰ KIỆN</h2>
                        <div className="ticket_info_box">
                            <p><span className='font_ticket'><strong>I. THÔNG TIN CHI TIẾT VỀ SỰ KIỆN “LEE JONG SUK 2023 FANMEETING TOUR in HO CHI MINH” <span>[ ENGLISH BELOW]</span></strong></span></p>
                            <p><span className='font_ticket'><strong>▪️ Tên sự kiện:</strong> “LEE JONG SUK 2023 FANMEETING TOUR in HO CHI MINH”</span></p>
                            <p><span className='font_ticket'><strong>▪️ Thời gian tổ chức:</strong> 18h00 thứ 7, 21/10/2023 tại Trung tâm Hội nghị Adora Center, 431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình, TP.Hồ Chí Minh</span></p>
                            <p><span className='font_ticket'><strong>▪️ Hotline hỗ trợ:</strong> 08.999.80.818 - 0243.788.00.99</span></p>
                            <p><span className='font_ticket'><strong><span>GIÁ VÉ VÀ QUYỀN LỢI CÁC HẠNG VÉ</span></strong></span></p>
                            <p><span className='font_ticket'><strong>▪️ Giá vé:</strong>&nbsp;VVIP: 4.600.000 VNĐ - Vé VIP: 3.800.000 VNĐ - Vé Platinum A: 2.000.000 VNĐ - Vé Platinum B: 1.500.000VNĐ</span></p>
                            <p><span className='font_ticket'><span><strong>▪️ Lưu ý</strong>:</span> Tất cả giá vé trên chưa bao gồm thuế GTGT theo quy định của pháp luật áp dụng hiện hành.&nbsp;</span></p>
                            <p>&nbsp;</p>
                            <p>
                                <span className='font_ticket'>
                                    <Image
                                        src="/images/img_event_detail.jpg"
                                        className='img_event_detail'
                                        priority={true}
                                        width={1920}
                                        height={1147}
                                        alt="Picture of the author"
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="organizational_information">
                    <div id="ticket-agent">
                        <h2 className="ticket_title">THÔNG TIN ĐƠN VỊ TỔ CHỨC</h2>
                        <div className="ticket_info_box">
                            <div className="sub_organiser">
                                <div className="image_organiser">
                                    <Image
                                        src="/images/Barcode.jpg"
                                        priority={true}
                                        width={200}
                                        height={150}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="about_organiser">
                                    <h4 className='title_about_organiser'>BOM Entertainment</h4>
                                    <div>
                                        <p className='detail_information' ><span className='text_information'>Được thành lập từ năm 2016, Công ty TNHH Bôm Hà Nội là công ty đa ngành nghề với các lĩnh vực như xây dựng; đầu tư, cho thuê bất động sản; xuất nhập khẩu các sản phẩm y tế;…Năm 2022, BÔM Hà Nội phát triển lĩnh vực hoạt động nghệ thuật giải trí với tên gọi BOM Entertainment - mục đích là cầu nối, kết nối, quảng bá văn hóa Hàn Quốc đến khán giả Việt Nam rộng rãi hơn nữa. BOM Entertainment có mối quan hệ thân thiết với các công ty giải trí hàng đầu tại Hàn Quốc. Vào 21/10/2023 tại Trung tâm Hội nghị Adora Center, 431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình, TP.Hồ Chí Minh, BOM Entertainment là đơn vị tổ chức chương trình Lee Jong Suk 2023 Fanmeeting tour – “Dear.My with” trong Fanmeeting tour của diễn viên Lee Jong Suk.</span></p>
                                        <p className='detail_information' ><span className='text_information'>-----------------</span></p>
                                        <p className='detail_information' ><span className='text_information'>ENGLISH</span></p>
                                        <p className='detail_information' ><span className='text_information'>BOM Entertainment Established in 2016, BOM Hanoi Co., Ltd. is a multi-industry company with fields such as construction; real estate investment and rental; import and export of medical products;...In 2022, BOM Hanoi develops the field of entertainment art activities called BOM Entertainment - the purpose is to bridge, connect, and promote Korean culture to the audience Vietnam is more spacious</span></p>
                                        <p className='detail_information' ><span className='text_information'>As a multinational company, BOM Entertainment has close relationships with leading entertainment companies in Korea. On October 21, 2023 at Adora Center Convention Center, 431 Hoang Van Thu, Ward 4, Tan Binh District, Ho Chi Minh City, BOM Entertainment is the exclusive organizer of the Lee Jong Suk 2023 Fanmeeting tour</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width='80%' footer={null}>
            <div className="onpageForm">
                <form action="" method="post" id="cartcheckout">
                    <div className="container">
                        <div className="row container_form">
                            <div className="col-4">
                                <div className="title-border-left uppercase bold">Thông tin khách hàng</div>
                                <div className="form-group">
                                    <label>Họ tên: </label>
                                    <input id="name" className="form-control" name="name" type="text" placeholder='vui lòng nhập' />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại: </label>
                                    <input id="phone" className="form-control" name="phone" type="text" placeholder='vui lòng nhập'/>
                                </div>
                                <div className="cover-form-group">
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input id="email" className="form-control" name="email" type="text" placeholder='vui lòng nhập'/>
                                    </div>
                                </div>
                                <div className="cover-form-group">
                                    <div className="form-group">
                                        <label>Địa chỉ:</label>
                                        <input id="address" className="form-control" name="address" type="text" placeholder='vui lòng nhập'/>
                                    </div>
                                </div>
                                <div className="title-border-left uppercase bold">LỰA CHỌN THANH TOÁN </div>
                                <div className="panel-group" id="accordion_order">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <label className="">
                                                    <input type="radio" name="payment_method_id" className="icheck" value="2" /><ins className="iCheck-helper" ></ins> <span>Thẻ tín dụng mở tại Việt Nam</span>
                                                    <i className="fa fa-cc-visa font24"></i> <i className="fa fa-cc-mastercard font24"></i> <i className="fa fa-cc-jcb font24"></i>
                                                    <a className="trigger_a" data-toggle="collapse" data-parent="#accordion_order" href="#collapseOne"></a>
                                                </label>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="payment_description">
                                                    <span>Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <label>
                                                    <input type="radio" name="payment_method_id" className="icheck" value="1" /><ins className="iCheck-helper"></ins><span>ATM / Internet Banking</span>
                                                    <i className="fa fa-credit-card-alt"></i>
                                                    <a className="trigger_a" data-toggle="collapse" data-parent="#accordion_order" href="#collapseTwo"></a>
                                                </label>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="payment_description">
                                                    <span>Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                            <label>
                                            <input type="radio" name="payment_method_id" className="icheck" value="5" /><ins className="iCheck-helper"></ins> <span>Chuyển khoản</span>
                                            <i className="fa fa-university"></i>
                                            <a className="trigger_a" data-toggle="collapse" data-parent="#accordion_order" href="#collapseThree"></a>
                                            </label>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="payment_description">
                                                    <span>Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công. Sau khi chúng tôi xác nhận giao dịch chuyển khoản thành công.</span>
                                                    <a href="https://ticketgo.vn/page/phuong-thuc-thanh-toan" target="_blank" className="orange-color">Xem thông tin chuyển khoản tại đây</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <label>
                                                    <input type="radio" name="payment_method_id" className="icheck" value="9" /><ins className="iCheck-helper"></ins><span>Thẻ tín dụng quốc tế</span>
                                                    <i className="fa fa-cc-visa font24"></i> <i className="fa fa-cc-mastercard font24"></i> <i className="fa fa-cc-jcb font24"></i>
                                                    <a className="trigger_a" data-toggle="collapse" data-parent="#accordion_order" href="#collapseFive"></a>
                                                </label>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="payment_description">
                                                    <span>Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <label>
                                                    <input type="radio" name="payment_method_id" className="icheck" value="12" /><ins className="iCheck-helper"></ins><span>Ví điện tử MoMo</span>
                                                    <a className="trigger_a" data-toggle="collapse" data-parent="#accordion_order" href="#collapse11"></a>
                                                </label>
                                            </h4>
                                        </div>
                                        <div id="collapse11" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="payment_description">
                                                    <span>Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="title-border-left uppercase bold">Giỏ hàng của bạn</div>
                                <div className="form-body">
                                    
                                    {listCart.map((tickets, idx) => {
                                        return (
                                            <div key={idx}>
                                                <Cart ticket={tickets} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group check_box_discount">
                                            <label>Mã giảm giá:</label>
                                            <div className="input-group">
                                                <div className="input-icon">
                                                    <input className="form-control" type="text" name="discount_code" id="discount_code" data-discount="0" data-type="" />
                                                </div>
                                                <span className="input-group-btn">
                                                    <button className="btn orange-background discount_check" type="button">
                                                         Kiểm tra 
                                                    </button>
                                                </span>
                                            </div>
                                            <div className="message_check_discount"></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr className="hidden shipping_msg_box">
                                                    <td>Phí ship</td>
                                                    <td className="text-right"><span className="shipping_msg"></span> VNĐ</td>
                                                </tr>
                                                <tr>
                                                    <td>Tổng cộng</td>
                                                    <td className="text-right"><span id="total_number_ticket" className="orange-color uppercase bold" data-total="0">0</span> <span className="orange-color uppercase bold">VNĐ</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-xs-12">
                                        <label>
                                        <div className="icheckbox_square-red checked"><input type="checkbox" name="agree" className="icheck" value="1" /><ins className="iCheck-helper"></ins><span className='rules'> Tôi đồng ý với các Điều khoản &amp; Chính sách của Tickego.vn </span></div> </label>
                                        <button type="submit" id="ladda_button" className="btn btn-block orange-background ladda-button" data-style="expand-left"><span className="ladda-label">Tiếp tục thanh toán</span></button>
                                    </div>
                                </div>
                                <div className="close-button">
                                    <button type="button" className="btn confirmclosed">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    </div>
  );
}

export default containerDetail;