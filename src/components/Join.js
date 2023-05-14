import React from 'react'

export default function Join() {
  return (
    <div className=" h-100 text-center p-1 mt-12" style={{backgroundColor:"#F3F5FD"}}>
        <div className=" text-4xl text-slate-500 font-bold pt-3 pb-3"> Ready To Join Referrizer?</div>
        <div className=" text-slate-400"> Our clients see an average of 20% growth in their business within the first month of using Referrizer.</div>
        <div className="text-slate-400 ">Why get left behind?</div>
        <div className=" p-5 h-20  flex justify-center h-full space-x-2">
        <button className="  rounded-lg bg-blue-500 text-white h-9 p-1"><span className=""> Signup For Free</span></button>
        <button className="  text-blue-500 h-9 "><span style={{border:"2px solid #4C70F0",borderRadius:"5px",padding:"5px 5px"}}> Book A Demo</span></button>
      </div>
    </div>
  );
}
