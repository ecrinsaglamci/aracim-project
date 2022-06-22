import {useState, useEffect } from "react";
import React from 'react';
import ValidateFormInfo from "../pages/ValidateFormInfo";

const UseForm = (ValidateFormInfo , callback) => {
    const [values, setValues] = useState({
       ilanadı: '',
       marka: '',
       fiyat: '',
       bulunduguyer: '',
       seri: '',
       model: '',
       yıl: '',
       yakıt: '',
       vites: '',
       km: '',
       renk: '',
       aciklama: ''
    });
 
    const [errors, setErrors] = useState ({});
    const [isSubmitting, setIsSubmitting] = useState (false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
     };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(ValidateFormInfo(values));
        setIsSubmitting(true);
    };

    useEffect (() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
    [errors]
    );


    return {handleChange, values , handleSubmit, errors};
};

export default UseForm;