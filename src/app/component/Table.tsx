// components/Table.js
import React from 'react';
import '../css/table.css';
// import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const Table = ({ data }) => {
    const router = useRouter()
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Khu Vực</th>
          <th>Hạng Vé</th>
          <th>Giá Vé</th>
          <th>Số Lượng</th>
          <th>TT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle button_area" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Khu A
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Khu A</a></li>
                        <li><a className="dropdown-item" href="#">Khu B</a></li>
                        <li><a className="dropdown-item" href="#">Khu C</a></li>
                    </ul>
                </div>
            </td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle button_ticket" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Vé VVIP
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Vé VVIP</a></li>
                        <li><a className="dropdown-item" href="#">Vé VIP</a></li>
                        <li><a className="dropdown-item" href="#">Vé Thường</a></li>
                    </ul>
                </div>
            </td>
            <td>{item.price}</td>
            <td className="col-md-3 col_mobile">
                <div className="col-md-3 quantity_table">
                    <div className="input-group bootstrap-touchspin">
                        <span className="input-group-btn"><button className="btn btn-danger bootstrap-touchspin-down" type="button">-</button></span>
                        <span className="input-group-addon bootstrap-touchspin-prefix"></span>
                        <input type="text" value="0" name="quant[4243]" id="ticket_4243" className="quant form-control" data-max="8" data-min="1" data-price="1100000" />
                        <span className="input-group-addon bootstrap-touchspin-postfix"></span>
                        <span className="input-group-btn"><button className="btn btn-info bootstrap-touchspin-up" type="button">+</button></span>
                    </div>
                </div>
            </td>
            <td>
                <div className='option'>+</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
