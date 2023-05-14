import React from 'react'

export default function Number() {
  return (
    <div className='p-20' style={{backgroundColor:"#F3F5FD"}}>
      <div className='text-center'>
        <div className='text-blue-400'>Numbers</div>
        <div className='text-2xl text-slate-600 font-bold p-3'>Referrizer In Numbers</div>
        <div className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Iaculis mattis non tellus eget volutpat pulvinar accumsan, dictum eu. </div>
      </div>
      <div className='flex justify-evenly p-7'>
      <div className='text-center'>
        <div className='text-8xl font-bold text-slate-700'>2000</div>
        <div className='text-slate-400'>Year Founded</div>
      </div>
      <div className='text-center'>
        <div className='text-8xl font-bold text-slate-700'>150+</div>
        <div className='text-slate-400'>Clients</div>
      </div>
      <div className='text-center'>
        <div className='text-8xl font-bold text-slate-700'>90+</div>
        <div className='text-slate-400'>Coutnries Served</div>
      </div>
      <div className='text-center'>
        <div className='text-8xl font-bold text-slate-700'>100+</div>
        <div className='text-slate-400'>Full-time Employees</div>
      </div>
      </div>
    </div>
  )
}
