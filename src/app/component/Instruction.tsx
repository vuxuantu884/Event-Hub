import Link from 'next/link';
import '../css/instruction.css';
// @ts-ignore
const InstructionBookTicket = () => {
  return (
    <div className="instructions_bookTicker">
        <div className="navbar-instruction">
            <ul className='navigation-instruction'>
                <li>
                    <Link href="/">Trang chủ</Link>
                </li>
                <li>
                    <Link href="#">Hướng dẫn đặt vé</Link>
                </li>
            </ul>
      </div>
      <div className="content_instruction">
          <h2 className="title_instruction">Hướng dẫn đặt vé</h2>
          <div className="step_instruction">
              Hướng dẫn đặt mua vé sự kiện trên trang ticketgo.vn<br></br>
              (How to Book Event Tickets Online on Ticketgo.vn) <br></br>
              <br></br>
              Bước 1: Sau khi ấn vào xem chi tiết sự kiện, tại trang sự kiện chi tiết hiển thị nút Đặt Vé Ngay như hình (1)
              (Step 1: Access to website ticketgo.vn and select the event you want to book tickets)<br></br>
              <br></br>
              Bước 2: Sau khi ấn vào nút &quot;MUA NGAY&quot; thì hệ thống website Ticketgo.vn sẽ chuyển sang giao diện đặt vé ( Hình bên dưới). Bạn điền đầy đủ thông tin: Họ tên, Số điện thoại, Email ( email còn hoạt động vì tình trạng đặt hàng + vé điện tử sẽ được gửi về email của bạn).
              Tiếp đến sau khi điền đầy đủ thông tin bạn chọn số lượng vé muốn mua và chọn hình thức thanh toán. Đông thời, Nhập mã code khuyến mãi nếu sự kiện bạn mua có mã khuyến mãi để hưởng ưu đãi.
              Sau đó ấn vào nút &quot;TIẾP TỤC THANH TOÁN &quot; để hoàn tất việc thanh toán cho đơn hàng.<br></br>
              (Step 2: After clicking the  &quot;BUY NOW &quot; button you will be forwarded to the booking form. You have to fill it in so the provider can contact you: Full name, Mobile, Email, and Address. Select your tickets and the number of tickets. Besides, if you have a  &quot;promo code &quot;. Let&ldquo;s enter your  &quot;promo code&quot; in the  &quot;PROMO CODE&quot; box to get the favor. Finally, Select your payment method. And click the &quot;CONTINUE&quot; button.)
              CÁC HÌNH THỨC THANH TOÁN (FORM OF PAYMENT):<br></br>
              + Credit Card:<br></br>
              If you pay by CREDIT CARD you choose the payment method: OPEN CREDIT CARD IN VIETNAM. Then make the payment according to the instructions below
              Nếu bạn thanh toán bằng THẺ TÍN DỤNG bạn chọn phương thức thanh toán: THẺ TÍN DỤNG MỞ TẠI VIỆT NAM. Sau đó thực hiện thanh toán các bước theo hướng dẫn bên dưới<br></br>
              + Debit Card / Internet banking:<br></br>
              If you pay by ATM/INTERNETBANKING card, you choose ATM/INTERNETBANKING payment method. Then make the payment according to the instructions below:
              Nếu bạn thanh toán bằng thẻ ATM/INTERNETBANKING bạn chọn phương thức thanh toán ATM/INTERNETBANKING. Sau đó thực hiện thanh toán các bước theo hướng dẫn bên dưới:<br></br>
              +Bank transfer:<br></br>
              If you pay by BANK TRANSFER you choose the BANK TRANSFER payment method. Then make the payment according to the instructions below:
              Nếu bạn thanh toán bằng hình thức CHUYỂN KHOẢN NGÂN HÀNG bạn chọn phương thức thanh toán CHUYỂN KHOẢN NGÂN HÀNG. Sau đó thực hiện thanh toán các bước theo hướng dẫn bên dưới:<br></br>
              + International Credit Card:<br></br>
              If you pay by INTERNATIONAL CREDIT CARD you choose the &quot;International Credit Card&quot; payment method. Then make the payment according to the instructions below:
              Nếu bạn thanh toán bằng THẺ TÍN DỤNG QUỐC TẾ bạn chọn phương thức thanh toán &quot;Thẻ tín dụng quốc tế&quot;. Sau đó thực hiện thanh toán các bước theo hướng dẫn bên dưới:<br></br>
              + Thanh toán bằng ví điện tử Momo: Bạn chỉ cần quét mã QR và mở ứng dụng Momo trên điện thoại để hoàn tất thanh toán.<br></br>
              <br></br>
              ---------<br></br>
              <br></br>
              Bước 3: Hoàn thành đơn hàng.<br></br>
              (Step 3: Complete the order.)<br></br>
              Sau khi bạn hoàn thành các bước trên, hệ thống sẽ hiển thị thông tin đơn hàng chi tiết của bạn đồng thời thông tin đơn hàng cũng sẽ được gửi đến hòm mail bạn đã đăng ký tại bước 2.
              (After you complete the above steps, the system will display your detailed order information and the order information will also be sent to the email box you registered in step 2.)
              Bạn có thể in đơn hàng bằng cách ấn nút in đơn hàng tại góc bên trái.<br></br>
              (You can place a print order by pressing the order print button in the left corner.)<br></br>
              <br></br>
              Bước 4: Nhận vé điện tử<br></br>
              (Step 4: Get your e-ticket)<br></br>
              Sau khi thanh toán thành công, vé điện tử sẽ được gửi vào hộp thư điện tử mà bạn đã đăng ký ở bước 2.<br></br>
              (After successful payment, the e-ticket will be sent to the email box you registered in step 2.)<br></br>
              Ticketgo.vn
          </div>
      </div>
    </div>
  );
};

export default InstructionBookTicket;