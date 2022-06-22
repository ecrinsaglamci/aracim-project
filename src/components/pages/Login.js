import React, { useState } from 'react';
import "../styled/Login.css";
import LoginBackground from "../../assets/LoginBackground.jpg";
import LoginForm from "../pages/LoginForm";


function Login() {
  const adminUser = {
    email: "ecrin@admin.com",
    password: "ecrin1234"
  }

  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError]= useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password ) {
      console.log("Giriş Yapıldı");
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log("Bilgiler eşleşmiyor!");
      setError("Bilgiler eşleşmiyor!")
    }
  }

  const Logout = () => {
    setUser ({name: "", email: ""});
    console.log("Çıkış Yapıldı");
  }

  return (
    
    <div className='login' >
      <div className='overlay'>
      <img src= {LoginBackground}/>
      <div className='giris'>
      {(user.email != "") ? (
          <div className='welcome'>
            <h2>Hoşgeldin,<span>{user.name}</span></h2>
            <button onClick={Logout}>Çıkış</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
        </div>
       </div>
    </div>
  )
}

export default Login;