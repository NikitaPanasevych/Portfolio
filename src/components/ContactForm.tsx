import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactStyle from "./Contact.module.css"
import { AnimatePresence, motion } from "framer-motion"

export const ContactForm = () => {
  const form: any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_m76qke3', 'template_a7yl92h', form.current, 'Z2LkdVRk3xqzomblY')
      .then((result:any) => {
          alert("Success");
      }, (error:any) => {
        alert("Error");
      });
  };

  return (
    <motion.form 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ease:"easeIn", duration:1}}
    ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className={ContactStyle.input} type="submit" value="Message me!" />
    </motion.form>
  );
};