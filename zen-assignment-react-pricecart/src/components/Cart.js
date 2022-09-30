/* eslint-disable no-lone-blocks */
import React from "react";
import "../styles.css";

const Cart = ({ data }) => {
  console.log(data);
  const { userType, price, featureList, muted } = data;
  const length = muted.length;
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {userType}
            </h5>
            <h6 className="card-price text-center">
              ${price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul class="fa-ul">
              {featureList.map((feature, index) => {
                return length > 0 && muted.includes(index) ? (
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {feature}
                  </li>
                ) : (
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {index === 0 ? (
                      length > 2 ? (
                        feature
                      ) : (
                        <strong>{feature}</strong>
                      )
                    ) : length === 0 && index === 6 ? (
                      <>
                        <strong>Unlimited </strong>
                        {feature}
                      </>
                    ) : (
                      feature
                    )}
                  </li>
                );
              })}
            </ul>
            <div class="d-grid">
              <a href="*" class="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

//this file has so many conditional checking
