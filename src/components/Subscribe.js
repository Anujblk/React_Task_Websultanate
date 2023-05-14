import React from 'react'

export default function Subscribe() {
  return (
    <div className='h-100 justify-center flex p-3 ' >
    <div className=' text-center' style={{ padding:"50px",height:"320px", width:"1101px", backgroundImage: "url('https://i.ibb.co/p4Qhxyk/Group-55611599-1.png=w300')" }}>
    <div className = "text-4xl text-slate-500 font-bold pt-3 pb-3 ">Want To Learn More About Referrizer?</div>
    <div className=" text-slate-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit lore. <br/> Deserunt deleniti pariatur id libero.</div>
    <div  className=" h-100 justify-center flex p-5 ">
    <form action="/action_page.php">
  <input style={{ width:"382px",height:"30px", padding:"9px, 12px, 9px, 12px"}} type="email" id="email" placeholder='Enter your email' name="email"/>
  <button className=" rounded-lg bg-blue-500 text-white h-8 p-1"><span className=""> Subscribe</span></button>
</form>
    </div>
    </div>
    
    </div>
  );
}
