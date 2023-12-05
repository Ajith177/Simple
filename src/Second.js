import React from 'react';
import './index.css';
import { useState } from 'react';

function Second() {

  const addingdata = (e) => {

    const { email, password, username } = input;
    e.preventDefault();

    const getuser = localStorage.getItem('useryoutube')
    console.log(getuser);

    const userdata = JSON.parse(getuser)
    console.log(userdata[0]);

    userdata.filter((el) => {
      if (el.inpval.email === input.email && el.inpval.password === input.password ) {
        alert("login is succesful")
      } else {
        alert("simply waste")
      }
    });

    // if(userlogin.length===0){
    //   alert("wertyuio")
    // }else{
    //   alert("great")
    // }
  }

  const [input, setInput] = useState({
    email: '',
    password: '',
    username: ''
  })
  // console.log(input)

  const getting_data = (e) => {

    const { value, name } = e.target

    setInput(() => {
      return {
        ...input, [name]: value
      }
    });

  }
  return (
    <div className='appu'>
      <h3>SIGN-IN</h3>
      <input type="text" name="email" onChange={getting_data} className='text-box' placeholder='enter the email' /><br />
      <input type="text" name="password" onChange={getting_data} className='text-box' placeholder='enter the password' /><br />
      <input type="text" name="username" onChange={getting_data} className='text-box' placeholder='enter the Username' /><br />
      <button onClick={addingdata}>LOGIN</button>

    </div>
  )
}

export default Second
