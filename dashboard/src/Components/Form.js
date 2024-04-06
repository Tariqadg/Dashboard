import axios from 'axios'
import React, {useState } from 'react'



const Form = () => {
  const[product,setProduct]=useState()
  const[customer,setcustomer]=useState()
  const[date,setDate]=useState()
  const[amount,setAmount]=useState()
  const[paymentMode,setPaymentMode]=useState()
  const[status,setStatus]=useState()

  function generatetrackingid() {
    const digits = '0123456789';
  
    let otp = '';
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
  
      const digit = digits[randomIndex];
  
      otp += digit;
    }
  
    return parseInt(otp);
  }
  
  

  
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    const trackingId = generatetrackingid()
    const order={trackingId:trackingId,product:product,customer:customer,date:date,amount:amount,paymentMode:paymentMode,status:status}
    axios.post("http://localhost:5000/item",order)
    .then(res=>{if (res.status === 200 || res.status === 201) { 
      window.location.reload()
      
    } else {
      console.error("API request unsuccessful:", res);
    }})
    .catch(er=>console.log(er))


  }
 
  
 

  return (
<div>
    <div className="flex justify-between  ">
    <h1 className=" text-3xl font-bold px-8 py-8">Add Customer </h1>
    <span className="w-[52px] h-[52px] mx-8 my-4 rounded-full">
      <img className="bg-white  text-white  " alt="" src="" />
    </span>
  </div>
  <form onSubmit={handleSubmit}>
    <h3 className="px-7 py-2 text-xl font-semibold pt-8 mb-3">
      Select Product
    </h3>
    
    <select className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] border-gray-200 px-[8px] py-[16px] gap-[8px] " onChange={e=>setProduct(e.target.value)} >
    <option value="None"></option>
       
      <option value="Speaker">Speaker</option>
      <option value="Headphone">Headphone</option>
      <option value="Bat">Bat</option>
      <option value="Smartphone">Smartphone</option>
      <option value="Watch">Watch</option>

    </select>
    <br></br>
    <h2 className="px-7 py-2 text-xl font-semibold pt-8 mb-3">
      Customer Name
    </h2>
    <input
      className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px] border-gray-200"
      type="text"
      placeholder=" Customer Name"
      onChange={e=>setcustomer(e.target.value)}
    />
    <h3 className="px-7 py-2 text-xl font-semibold pt-10 mb-3">Date</h3>

    <input
      className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px] border-gray-200"
      type="date"
      placeholder="Date"
      onChange={e=>setDate(e.target.value)}
    />

    <h1 className="px-7 pt-8 py-2 text-xl font-semibold  mb-3">
      Amount
    </h1>
    <input
      className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px] border-gray-200"
      type="text"
      placeholder="$1,000,000.00"
      onChange={e=>setAmount(e.target.value)}
    ></input>
    <h3 className="px-7 pt-8 mb-3 py-2 text-xl font-semibold">
      Payment Mode
    </h3>
    <select className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px] border-gray-200" onChange={e=>setPaymentMode(e.target.value)} value={paymentMode}>
    <option value="None"></option>
      
      <option value="Transfer Bank">Transfer Bank</option>
      <option value="Cash on Delivery">Cash on Delivery</option>
      <option value="UPI Payment">UPI Payment</option>
    </select>
    <br></br>
    <h3 className="px-7 py-2 pt-8 mb-3text-xl font-semibold">Status</h3>
    <select className=" w-[336px] border-gray-200 h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px]" onChange={e=>setStatus(e.target.value)} value={status}>
      <option value="None"></option>
      <option value="Delivered">Delivered</option>
      <option value="Process">Process</option>
      <option value="Cancelled">Cancelled</option>
    </select>
    <br></br>

    <button className="bg-black text-white  w-[336px] h-[48px] top-[1px] mx-6 border-[1px] px-[8px] py-[12px] gap-[8px] mt-16 rounded-lg">
      Add +
    </button>
  </form>
  </div>
    
   
  )
}
export default Form