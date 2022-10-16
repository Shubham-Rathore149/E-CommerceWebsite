import React, { useState } from 'react';
import Footer from './footer';

export default function Form() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
    message: ""
  })
  const getUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  const postDataOnFirebase = async (event) => {
    event.preventDefault();
    const res = await fetch("https://react-form-93e16-default-rtdb.firebaseio.com/formdata.json", {
      method: "post",
      header: "content-Type: Application/json",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        tel: user.tel,
        message: user.message
      })
    })
    if (res) {
      setUser({
        name: "",
        email: "",
        password: "",
        tel: "",
        message: ""
      })
      alert("Data Successfully Stored in Database")
    }
  }
  return (
    <div>
      <div className='main-form-wrap'>
        <div className='form-wrap'>
          <form method='post'>
            <h1>Sing-Up</h1>
            <input type="text" name="name" value={user.name} onChange={getUserData} placeholder='Name' />
            <input type="email" name="email" value={user.email} onChange={getUserData} placeholder='Email' />
            <input type="Password" name="password" value={user.password} onChange={getUserData} placeholder='Passsword' />
            <input type="tel" name="tel" value={user.tel} onChange={getUserData} placeholder='Mo.Number' />
            <textarea name="message" value={user.message} onChange={getUserData} placeholder='Message' cols="30" rows="10"></textarea>
            <input className='ct-form-btn' type="Button" value='Sing-Up' onClick={postDataOnFirebase} />
          </form>
        </div>
      </div>
      <div className='footer-ft'>
        <Footer/>
      </div>
    </div>
  );
}

