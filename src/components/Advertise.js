import React, { useState } from "react";

const Advertise = () => {
    const [showDetail, setShowDetail] = useState(false);

    const handleToggle = () => setShowDetail(!showDetail);
   
    
  return (
    <div class="m-3"  onClick={handleToggle} >
   
        
      <div  class="row adver rounded-top ">
        <div class="col-9 text-right">
          <div dir="rtl">
            <h5 class="font-weight-bold text-warning  ">
              سگ یک ساله نژاد ژرمن{" "}
            </h5>
            <h6>منطقه </h6>
            <h6>34000 تومان</h6>
          </div>
        </div>
        <div class="col-3 p-0 ">
          <img
            src="https://files.picobino.com/wp-content/uploads/2021/02/what-kind-health-problems-do-golden-retrievers-have-696x448.jpg"
            title="Title of image"
            alt="alt text here"
          />
        </div>
      </div>
      <div class="row  adversub rounded-bottom ">
        
          
            <div class="col-6 mt-2 ">
              <span class="m-2 text"> دو روز پیش</span><br/>
              <span class="m-2 text"> 2390</span>
              
            </div>
            <div class="col-2 mt-2">
              <i class="far fa-comment  "></i>
              <p>
                <small class="headersecondtext"> گفتگوهای من</small>
              </p>
            </div>
            <div class="col-2 mt-2">
              <i class="far fa-check-circle   "></i>
              <p>
                <small class="headersecondtext"> درخواست خرید </small>
              </p>
            </div>
            <div class="col-2 mt-2">
              <i class="far fa-comment-lines  "></i>
              <p>
                <small class="headersecondtext"> گفتگوهای من</small>
              </p>
            </div>
          </div>
          {showDetail && <div class="row adver rounded-top">
             <p><i class="far fa-comment-lines  "></i>test</p>
             <p><i class="far fa-comment-lines  "></i>test</p>
             <p><i class="far fa-comment-lines  "></i>test</p>
             <p><i class="far fa-comment-lines  "></i>test</p>
              
          


         
              </div>}
        </div>
     
    
  );
};

export default Advertise;
