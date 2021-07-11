import React from "react";

const SecondHeader = () => {
  return (
    <div class="container secondHeder mb-3  w-90 border mt-3">
      <div class="row mt-3">
        <div class="col-3">
          <div class="row">
            <div class="col-4 ">
              <i class="far fa-comment  "></i>
              <p>
                <small class="headersecondtext"> گفتگوهای من</small>
              </p>
            </div>
            <div class="col-4  ">
              <i class="far fa-check-circle   "></i>
              <p>
                <small class="headersecondtext"> درخواست خرید </small>
              </p>
            </div>
            <div class="col-4 ">
              <i class="far fa-comment-lines  "></i>
              <p>
                <small class="headersecondtext"> گفتگوهای من</small>
              </p>
            </div>
          </div>
        </div>
        <div class="col pt-2 align-middle text-right">
          <span class="m-2"> گفتگوهای من</span>
          <i class="fas fa-desktop"></i>
          <span class="m-2 fa-lg pt-3 text-warning"> |</span>
          <i class="fas fa-align-left text-warning"></i>
          <i class="fas fa-arrow-right m-2 text-warning"></i>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
