import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginBackground from "../../assets/LoginBackground.jpg";
import '../styled/Register.css';


function Register() {
  const adminUser = {
    email: "ecrin@admin.com",
    password: "ecrin1234",

    email:"ali@gmail.com",
    password:"ali123"
  }

  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError]= useState("");

  const Register = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password ) {
      console.log("Kayıt başarıyla tamamlandı");
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log("Bilgiler eşleşmiyor!");
      setError("Bilgiler eşleşmiyor!")
    }
  }

  
  return (
    
    <div className='register' >
      
      <div className='overlay'>
      <img src= {LoginBackground}/>
      <div className='giris'>
      {(user.email != "") ? (
          <div className='welcome'>
            <h2>Hoşgeldin,<span>{user.name}</span></h2>
            <Link to="/cars"> 
            <button className="baslaBtn">Devam Edelim {'->'}</button>
            </Link>
          </div>
        ) : (
          <RegisterForm Register={Register} error={error}/>
        )}
        </div>
       </div>
    </div>
  )
}

export default Register;