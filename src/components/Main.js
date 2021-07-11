import React, { useState } from "react";
import Advertise from "./Advertise";
import SecondHeader from "./SecondHeader";

function Main() {
  
  return (
    <div  class="container content w-75 border mt-3" >
     
      <div>
        <SecondHeader  />
        <div class="row ">
          <div class="col">
            <Advertise  />
          </div>
          <div class="col">
            <Advertise  />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Advertise  />
          </div>
          <div class="col">
            <Advertise />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Advertise  />
          </div>
          <div class="col">
            <Advertise  />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Advertise  />
          </div>
          <div class="col">
            <Advertise  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
