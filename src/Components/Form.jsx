import React, { useState } from 'react'
import axios from 'axios'



function Form() {
  const [formData,setFormData]=useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    mobile:'',
    dob:'',
    appliedposition:'',
    currentAddress:'',
    state:'',
    permanentaddress:'',
    city:'',
    linkedin:'',
    code:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/apply',formData);
      console.log("Application submitted successfully",response.data)
    }catch (error) {
      console.error("Error submitting failed",error)
    }
      
    
  };
  return (
    <div>
        <div>
        <div>
      
        <div className='flex justify-center items-center h-full'>
        <div className=' w-[100%] h-full m-10  bg-white  p-8'>
          <form >
            <h4 className= 'text-3xl font-bold text-black py-2'>Job Application</h4>
            <p className='py-2 mb-2 text-black'>please complete the form below to apply for a position with us.</p>
            <div className='flex justify-between  text-black'>
            <label>First Name 
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
            <label className='mr-30'>Middle Name
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
            <label className='mr-40 pr-20'>Last Name
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
            
          </div>
          <div className='flex flex-row gap-10 justify-between mb-4  '>
          <input className='flex flex-col flex-grow border relative bg-gray-100 p-4' type='text' onChange={handleChange} name="firstname" value={formData.firstName}></input>
          <input className='border relative flex-grow  bg-gray-100 p-4'type='text'name='middlename' onChange={handleChange} value={formData.middleName}></input>
            <input className='border relative flex-grow  bg-gray-100 p-4'type='text' name='lastname' onChange={handleChange} value={formData.lastName}></input>
          </div>
          <div className='flex flex-col mb-4 text-black'>
            <label>Email id
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>
            </label>
            <input className='border relative bg-gray-100 p-3'type='email' name='email' onChange={handleChange} value={formData.email}></input>
          </div>
          <div className='flex flex-col mb-4 text-black'>
            <label>Mobile Number
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>

            </label>
            <input className='border relative bg-gray-100 p-3'type='text' onChange={handleChange} name='mobileno' value={formData.mobile}></input>
          </div>
          <div className='flex flex-col mb-4 text-black'>
            <label>Date of birth
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>
            </label>
            <input type='date' className='border relative bg-gray-100 p-4 w-90  rounded-lg 'name='date' onChange={handleChange} value={formData.dob}></input>
          </div>

          <div className='flex flex-col mb-4 text-black'>
            <label>Applied Position
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>
            </label>
            <input className='border relative bg-gray-100 p-3'type='text'name='appliedposition' onChange={handleChange} value={formData.appliedposition}>
            </input>
          </div>
          <div className='flex flex-row justify-between mb-2 text-black'>
            <label>Current Address
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>
            </label>
            <label className=' mr-40 pr-60'>State
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
          </div>
          <div className='flex flex-row gap-5 justify-between mb-4'>
            <input className='w-[60%] border relative bg-gray-100 p-7'type='text'name='currntaddress' onChange={handleChange} value={formData.currentAddress}></input>
            <input className='w-[40%] border relative bg-gray-100 p-7'type='text'name='state' onChange={handleChange} value={formData.state}></input>
          </div>
          <div className='flex flex-row justify-between mb-2'>
            <label>Permanent Address
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span>
            </label>
            <label className=' mr-40 pr-60'>City
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
          </div>
          <div className='flex flex-row gap-5 justify-between mb-4'>
            <input className='w-[60%] border relative bg-gray-100 p-7'type='text' name='permanentaddress' onChange={handleChange} value={formData.permanentaddress}></input>
            <input className='w-[40%] border relative bg-gray-100 p-7'type='text' name='city' onChange={handleChange} value={formData.city}></input>
          </div>
         
          <div className='flex gap-5 justify-between mb-2 text-black'>
            <label>Linkedin
              
            </label>
            <label className=' mr-40 pr-60'>code
            <span class="absolute ml-3 mt-1 size-2 text-red-500">  *</span></label>
           
          </div>
          <div className='flex flex-row gap-5 justify-between mb-4'>
          <input className='w-[60%] border relative bg-gray-100 p-3'type='text'name='linkedin' onChange={handleChange} value={formData.linkedin}></input>
          <input className='w-[40%] border relative bg-gray-100 p-3'type='text'name='code' onChange={handleChange} value={formData.code}></input>

          </div>
          <button className='w-[200px] justify-center items-center py-4 mt-8  bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={handleSubmit}>Submit</button>
          <div>
        <p className='text-blue text-start mt-2'>Please check your application before submission </p>
        </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    </div>

    
  )
}
export default Form
