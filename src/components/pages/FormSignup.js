import { ErrorSharp } from '@mui/icons-material';
import React from 'react';
import UseForm from './UseForm';
import ValidateFormInfo from './ValidateFormInfo';
import "../styled/Form.css";
import FormBackground from '../../assets/FormBackground.jpg';


const FormSignup = ({submitForm}) => {
    const{handleChange ,handleSubmit, values, errors} = UseForm(ValidateFormInfo , submitForm);
    return (
    <div className='form-page'>
        <img src={FormBackground} alt='spaceship' className='form-img'></img>
    <div className='form-content-left'>
        <form className='form-left' onSubmit={handleSubmit}>
            <h1>
                İlan vermek için lütfen aracının bilgilerini doğru girdiğinden emin ol!
            </h1>
            <div className='form-inputs-left'>
                <label htmlFor='ilanadı' className='form-label'>İlan Adı </label>
                    <input id='ilanadı' type="text" name="ilanadı" className='form-input' placeholder='İlan Adını Giriniz...' value={values.ilanadı} onChange={handleChange}>
                    </input>
               {errors.ilanadı && <p>{errors.ilanadı}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='marka' className='form-label'>Marka </label>
                    <input id='marka' type="text" name="marka" className='form-input' placeholder='Markayı Giriniz...' value={values.marka} onChange={handleChange}>
                    </input>
                {errors.marka && <p>{errors.marka}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='fiyat' className='form-label'>Fiyat </label>
                    <input id='fiyat' type="text" name="fiyat" className='form-input' placeholder='Fiyatı Giriniz...' value={values.fiyat} onChange={handleChange}>
                    </input>
                {errors.fiyat && <p>{errors.fiyat}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='bulunduguyer' className='form-label'>Bulunduğu Yer  </label>
                    <input id='bulunduguyer' type="text" name="bulunduguyer" className='form-input' placeholder='Bulunduğu Yeri Giriniz...' value={values.bulunduguyer} onChange={handleChange}>
                    </input>
                {errors.bulunduguyer && <p>{errors.bulunduguyer}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='seri' className='form-label'>Seri </label>
                    <input id='seri' type="text" name="seri" className='form-input' placeholder='Seriyi Giriniz...' value={values.seri} onChange={handleChange}>
                    </input>
                {errors.seri && <p>{errors.seri}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='model' className='form-label'>Model  </label>
                    <input id='model' type="text" name="model" className='form-input' placeholder='Modeli Giriniz...' value={values.model} onChange={handleChange}>
                    </input>
                {errors.model && <p>{errors.model}</p>}
            </div>
            <div className='form-inputs-left'>
                <label htmlFor='yıl' className='form-label'>Yıl </label>
                    <input id='yıl' type="date" name="yıl" className='form-input' placeholder='Yılını Giriniz...' value={values.yıl} onChange={handleChange}>
                    </input>
                {errors.yıl && <p>{errors.yıl}</p>}
            </div>
            
        </form>
    </div>
    <div className='form-content-right'>
        <form className='form-right' onSubmit={handleSubmit}>
            <div className='form-inputs'>
                <label htmlFor='yakıt' className='form-label'>Yakıt  </label>
                    <input id='yakıt' type="text" name="yakıt" className='form-input' placeholder='Yakıtı Giriniz...' value={values.yakıt} onChange={handleChange}>
                    </input>
                {errors.yakıt && <p>{errors.yakıt}</p>}
            </div>
            
            <div className='form-inputs'>
                <label htmlFor='vites' className='form-label'>Vites </label>
                    <input id='vites' type="text" name="vites" className='form-input' placeholder='Vitesi Giriniz...' value={values.vites} onChange={handleChange}>
                    </input>
                {errors.vites && <p>{errors.vites}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='km' className='form-label'>KM  </label>
                    <input id='km' type="text" name="km" className='form-input' placeholder='KM Giriniz...' value={values.km} onChange={handleChange}>
                    </input>
                {errors.km && <p>{errors.km}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='motorgucu' className='form-label'>Motor Gücü </label>
                    <input id='motorgucu' type="text" name="motorgucu" className='form-input' placeholder='Motor Gücünü Giriniz...' value={values.motorgucu} onChange={handleChange}>
                    </input>
                {errors.motorgucu && <p>{errors.motorgucu}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='motorhacmi' className='form-label'>Motor Hacmi  </label>
                    <input id='motorhacmi' type="text" name="motorhacmi" className='form-input' placeholder='Motor Hacmini Giriniz...' value={values.motorhacmi} onChange={handleChange}>
                    </input>
                {errors.motorhacmi && <p>{errors.motorhacmi}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='renk' className='form-label'>Renk  </label>
                    <input id='renk' type="text" name="renk" className='form-input' placeholder='Renk Giriniz...' value={values.renk} onChange={handleChange}>
                    </input>
                {errors.renk && <p>{errors.renk}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
                Kaydet
            </button>
            <span className='close-btn'></span>
        </form>    
    </div>
    </div>
  )
}

export default FormSignup;