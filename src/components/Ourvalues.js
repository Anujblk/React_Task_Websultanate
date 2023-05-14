import React from 'react'

export default function Ourvalues() {
  return (
    <div className='p-5'>
      <div className='text-center p-10'>
        <div className='text-blue-400'>Values</div>
        <div className='text-4xl text-slate-600 font-bold'>Our Values</div>
      </div>
      <div className='flex justify-evenly'>
        <div className='  justify-around w-1/3 p-3 text-center'>
        <div className='flex justify-center'><img src="https://i.ibb.co/nBvfBsb/Group-1.png" alt="" /></div>
        <div className='text-3xl text-slate-500 font-bold'>People first</div>
        <div>Create high-converting landing pages in minutes,<br /> even if you are not a marketing.</div>
        </div>
        <div className='justify-around w-1/3 p-3 text-center'>
        <div className='flex justify-center'><img src="https://i.ibb.co/TRmmPtz/Group-55611479.png" alt="" /></div>
        <div className='text-3xl text-slate-500 font-bold'>Customer-Focused</div>
        <div>Get to the top of Google search <br /> results with SEO optimized pages.</div>
        </div>
        <div className='justify-around w-1/3 p-3 text-center'>
        <div className='flex justify-center'><img src="https://i.ibb.co/hsmcczh/Group-55611477.png" alt="" /></div>
        <div className='text-3xl text-slate-500 font-bold'>Transparancy</div>
        <div>Attract a high volume of free traffic <br /> and turn it into paying customers.</div>
        </div>
      </div>
    </div>
  )
}
