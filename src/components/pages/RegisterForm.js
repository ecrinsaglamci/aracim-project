import React, {useState} from 'react';

function RegisterForm({Register,error}) {
    const [details, setDetails] = useState({name: "", email: "", password: "" , password2:""});
    const submitHandler = e => {
       e.preventDefault(); 
       Register(details);
    }
  return (
    <form onSubmit={submitHandler} className="form-register">
        <div className='form-inner'>
            <h2>Kayıt Ol</h2>
            {(error !== "") ? ( <div className='error'>{error}</div> ): ""}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='password2'>Confirm Password:</label>
                <input type='password' name='password2' id='password2' onChange={e => setDetails({...details, password2: e.target.value})} value={details.password2}></input>
            </div>
            <input type="submit" value="REGISTER"/>
        </div>
    </form>
  )
}

export default RegisterForm;