import React, { useState } from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import '../styled/Form.css';

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submitForm(){
    setIsSubmitting(true);
  }

  return (
    <>
    <div className='form-content-left'>
      
      
      { !isSubmitting ? <FormSignup submitForm={submitForm} /> : <FormSuccess/> } 
    </div>
   
    
    </>
  )
}

export default Form