'use client'
import Cart from '../component/Cart';
import Table from '../component/Table';
import '../css/pay.css';
import '../css/containerDetail.css';

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
const data = [
    {
        area: [
            {
                id: 1,
                name: 'Khu A'
            },
            {
                id: 2,
                name: 'Khu B'
            }
        ],
        ticket: [
            {
                id: 1,
                nameticket: 'Vé VVIP'
            },
            {
                id: 2,
                nameticket: 'Vé VIP'
            }
        ],
        price: '4,500,00VND'
    },
    {
        area: [
            {
                id: 1,
                name: 'Khu A'
            },
            {
                id: 2,
                name: 'Khu B'
            }
        ],
        ticket: [
            {
                id: 1,
                nameticket: 'Vé VVIP'
            },
            {
                id: 2,
                nameticket: 'Vé VIP'
            }
        ],
        price: '4,500,00VND'
    }
]
function Pay() {
  return (
    <div className='pay'>
      <div className="container_form">
          <div className="row">
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
              <div className="title-border-left uppercase bold">Giỏ hàng của bạn</div>
              <div className="form-body">
                    <Table data={data} />
                  {/* {listCart.map((tickets, idx) => {
                      return (
                          <div key={idx}>
                              <Cart ticket={tickets} />
                          </div>
                      )
                  })} */}
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
                  
              </div>
          </div>
          <div className="row pay_option">
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
              <div className="col-xs-12">
                    <label>
                    <div className="icheckbox_square-red checked"><input type="checkbox" name="agree" className="icheck" value="1" /><ins className="iCheck-helper"></ins><span className='rules'> Tôi đồng ý với các Điều khoản &amp; Chính sách của Tickego.vn </span></div> </label>
                    <button type="submit" id="ladda_button" className="btn btn-block orange-background ladda-button" data-style="expand-left"><span className="ladda-label">Tiếp tục thanh toán</span></button>
                </div>
              <div className="close-button">
                  <button type="button" className="btn confirmclosed">Đóng</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Pay;