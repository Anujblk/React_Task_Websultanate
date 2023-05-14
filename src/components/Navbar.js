import React from "react";

export default function Navbar() {
  return (
    <div className="flex  w-full h-16 p-4 justify-around">
      <div className="flex h-full space-x-1">
        <img className="w-7 h-7" src="https://i.ibb.co/QrVDmPf/Group.png" alt="" />
        <div className="text-xl font-bold">Referrizer</div>
      </div>
      <div className="flex h-full space-x-4 font-bold text-gray-400">
        <div>Solution</div>
        <div>Pricing</div>
        <div>Testimonials</div>
      </div>
      <div className="flex h-full space-x-2">
        <button className="  text-blue-500 h-9 "><span style={{border:"2px solid #4C70F0",borderRadius:"5px",padding:"5px 5px"}}> Login</span></button>
        <button className=" rounded-lg bg-blue-500 text-white h-9 p-1"><span className=""> Get Started For free</span></button>
      </div>
    </div>
  );
}
