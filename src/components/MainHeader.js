import React from "react";

const MainHeader = () => {
  return (
    <div class=" topHeader container bg-white w-75 border mt-3  pt-3 h-100">
      <div class="row">
        <div class="col-3">
          <div class="row">
            <div class="col pt-2">
              <span class="mb-0">
                <small>!یک عنوان جدید</small>
              </span>
              <span>
                <i class="fas fa-plus-circle ml-2 text-warning fa-lg"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="row ">
            <div class="col text-right">
              <i class="far fa-user fa-2x text-warning "></i>
            </div>
            <div class="col text-center">
              <i class="far fa-heart fa-lg "></i>
              <p>
                <small class="headertext">علاقه مندی های من</small>
              </p>
            </div>
            <div class="col text-left">
              <i class="far fa-comment fa-lg ml-3"></i>
              <p>
                <small class="headertext"> گفتگوهای من</small>
              </p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="row">
            <div class="col text-right">
              <i class="far fa-store fa-2x text-warning "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
