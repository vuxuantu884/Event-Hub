'use client'
import React from 'react';
import '../css/Cart.css';
// @ts-ignore
export default function Cart({ ticket }) {
  return(
    <div className="Event">
        <div className="form-group-cart">
            <label className="control-label col-md-6 col-xs-9">
                <span>
                    {ticket.name}
                </span>
            </label>
            <div className="col-xs-3 div-label">{ticket.price}</div>
            <div className="col-md-3">
                <div className="input-group bootstrap-touchspin">
                    <span className="input-group-btn"><button className="btn btn-danger bootstrap-touchspin-down" type="button">-</button></span>
                    <span className="input-group-addon bootstrap-touchspin-prefix"></span>
                    <input type="text" value="0" name="quant[4243]" id="ticket_4243" className="quant form-control" data-max="8" data-min="1" data-price="1100000" />
                    <span className="input-group-addon bootstrap-touchspin-postfix"></span>
                    <span className="input-group-btn"><button className="btn btn-info bootstrap-touchspin-up" type="button">+</button></span>
                </div>
            </div>
        </div>
    </div>
  );
}
