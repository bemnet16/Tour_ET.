import React, { useState } from 'react'
// import './Contact.css'
import { CgPhone } from "react-icons/cg";

import { GoMailRead } from "react-icons/go";


function Contact() {

    const [fullInfo, setFullInfo] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFullInfo({ ...fullInfo, [name]: value })
    }

    const handleSend = (e) => {
        e.preventDefault()
        fetch('http://localhost:3002/messages', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fullInfo)
        }).then(() => {
            console.log(fullInfo)
        })

    }

    return (
        <div className="contact container-flud py-5 row mx-0 ">
            <div className="bg-dark mx-auto m-md-5  rounded-5 col-10 col-md-5 py-4"  >
                <div className="banner">
                    <div className="topic mb-2">
                        <h1 className='text-center fw-bold text-secondary mt-3 mb-5' >Contact Us</h1>
                    </div>

                </div>

                <div className="getin py-3">
                    <h4 className='d-flex justify-content-start mx-5 text-info fw-bold mb-3'>Get In Touch</h4>
                    <div className="form ">
                        <form className='contact__form ' onSubmit={(e) => handleSend(e)} >
                            <input className='form-control w-75 ms-5' type="text" name='name' onChange={handleChange} placeholder='Enter your name' required /><br />
                            <input className='form-control w-75 ms-5 mb-4' type="email" name='email' onChange={handleChange} placeholder='Email' required />
                            <input className='form-control w-75 ms-5' type="text" name='subject' onChange={handleChange} placeholder=' Enter subject' required /> <br />
                            <textarea className='form-control w-75 ms-5 mb-4' name="message" onChange={handleChange} placeholder='Enter Message' style={{ height: 75 }} required></textarea>
                            <button className='btn w-50 rounded-5 btn btn-secondary btn-block text-white  fw-bolder' type='submit'>SEND</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="icons col-10 col-md-5 mx-auto m-md-3 mt-md-5">
                <div className="con rounded-circle call py-3 my-5">
                    <p className='text-dark h5 fw-bold '><span className='display-4 text-black fw-bold'> <CgPhone />  </span>   +251 9 123 456</p>
                    <p className=' fw-bolder'>Call Us</p>
                </div>
                <div className="con rounded-circle py-3 email my-5">
                    <p className='text-dark h5 fw-bold'><span className='display-4 text-black'> <GoMailRead /></span>    tour.ET@gmail.com</p>
                    <p className=' h5 fw-bolder'>Send us an email</p>
                </div>
            </div>
        </div>
    )
}

export default Contact