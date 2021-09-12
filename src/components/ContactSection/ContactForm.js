import React, { useState } from 'react'
import Validate from './Validateinfo'
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import Checked from '../../images/checked.png'


function ContactForm() {

    const [ values, setValues ] = useState({
        fullname: '',
        email: '',
        message: ''
    })

    const [ errors, setErrors ] = useState({})


    const handleChange = e => {
        const {name , value } = e.target
        setValues ({
            ...values,
            [name]: value
        })
    }

    const [result, showResult ] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errors.fullname && !errors.email && !errors.message )
            {
                setErrors(Validate(values))
            }
            else
            {   

                emailjs.sendForm('m5nz0rd', 'xz8qz9x', e.target, 'user_ExuEo1yX9B9WxZ7OH0zT2')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });  
            showResult(true)
            }


    }

    const Result = styled.img`
    position: absolute;
    width: 400px;
    height: 400px;
    margin-left: -12rem;
    justify-content: center;
    align-items: center;
    margin-top: -1em;
    transition: 0.2s ease-in-out;

    `

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <div className='form-success'>
                            {result ? <Result src={Checked} /> : null }
                    </div>
                <div className="form-inputs" >
                    <label htmlFor="fullname" className="form-label">
                        Full name
                    </label>
                        <input type="text" 
                        name="fullname"  
                        className="form-input"
                        placeholder="Enter your fullname"
                        value={values.fullname}
                        onChange={handleChange} />
                        {errors.fullname && <p>{errors.fullname}</p>}
                </div>
                <div className="form-inputs" >
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                        <input type="email" 
                        name="email"  
                        className="form-input"
                        placeholder="Enter your fullname"
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs" >
                    <label htmlFor="message" className="form-label">
                        Your message
                    </label>
                    <textarea 
                    name="message"  
                    className="form-textarea"
                    placeholder="Let's work together"
                    value={values.message}
                    onChange={handleChange}>
                    </textarea>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className="form-input-btn" 
                    type="submit">Send</button>

            </form>

        </div>
    )
}

export default ContactForm
