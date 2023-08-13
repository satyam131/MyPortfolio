import React from 'react'
import './contact.css'
import { LuMail } from 'react-icons/lu'
import { PiMessengerLogo } from 'react-icons/pi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ctiz3fz', 'template_tsrplte', form.current, '9N08VcTlhSnDG7Squ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert("Message sent Successfully");
    e.target.reset();
  };

 

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <LuMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>satyamkumarprajapati1316@gmail.com</h5>
            <a href="mailto:satyamkumarprajapati1316@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <PiMessengerLogo className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>satyamprajapati</h5>
            <a href="https://m.me/satyam.prajapati" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>735549xxxx</h5>
            <a href="https://api.whatsapp.com/send?phone+917355497002" target="_blank">Send a message</a>
          </article>

        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={  sendEmail  }  >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact