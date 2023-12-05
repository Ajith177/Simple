import React, { useState } from 'react';
import './index.css';

function First() {

    const [data,setData]=useState()

    const addData = (event)=>{
        event.preventDefault();

        const{email,password,username}=inpval;
        localStorage.setItem('useryoutube',JSON.stringify([{...data,inpval}]));
    }


    const [inpval,setInpval]=useState({
        email:"",
        password:"",
        username:""

    })
// console.log(inpval)

    const getdata=(e)=>{
        // console.log(e.target.value)

        const{value,name}=e.target

        // console.log(name,value)

        setInpval(()=>{
            return{
                ...inpval,[name]:value
            }
        });
    }
  return (
    <div className='application'>
        <h3>SIGN-UP</h3>
        <input type="text"  name="email" onChange={getdata} className='text-box' placeholder='enter the email'/><br/>
        <input type="text" name="password" onChange={getdata} className='text-box' placeholder='enter the password'/><br/>
        <input type="text"  name="username" onChange={getdata} className='text-box' placeholder='enter the Username'/><br/>
        <button onClick={addData}>SUBMIT</button>
              
    </div>
  )
}

export default First
