import React from 'react'

export default function Community() {
    return (
        <div className="flex justify-around" style={{height:"638px"}}>
          <div className="flex-col w-1/2 mt-40 ml-56 ">
            <div className="text-sm text-blue-500 ">People First</div>
            <div className="text-4xl text-slate-500 font-bold pt-3 pb-3">Community that has impact</div>
            <div >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada. Mauris dignissim et tellus enim diam sed. <br /> Pellentesque id tellus, molestie non, imperdiet sed vitae nullam odio. Morbi tellus, odio in duis quis lorem. Malesuada nisl sapien gravida elementum ac, et placerat eu.
            </div>
          </div>
          <div className="w-1/2 flex justify-center mt-16 mr-60 pb-16 pl-10">
            <img style={{width:"550px",height:"448px"}} src="https://i.ibb.co/3cj2s08/Frame-55611926.png" alt="" />
          </div>
        </div>
      );
}
