import React, { useState } from 'react';
import './Contact.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [prevContactInfo, setPrevContactInfo] = useState(null);

  const [contactName , setContactName] = useState('');
  const [contactmobile , setContactMobile] = useState('');
  const [contactmsg , setContactmsg] = useState('');
  const [emaill , setEmaill] = useState('');


  const handleButtonClick = () => {
    setShowForm(true);
    setPrevContactInfo(
      <div className="contact">
        {/* Save the existing contact information here */}
        {/* ... Your existing contact information JSX ... */}
      </div>
    );
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    //navigate('/bussiness')
    e.preventDefault();
  
    if (
      contactName.trim() === '' ||
      contactmobile.trim() === '' ||
      contactmsg === null
      ) {
        // Set an error state or display an error message indicating that all fields are required
        console.error('Please fill in all the required fields.');
        alert('Please fill in all the required fields.');
        return;
      }
      
  
      firebase.firestore().collection('contactusdata').add({
        contactName,contactmobile,contactmsg,emaill
    });
    console.log("Contatct data Daata add")
  
    // Clear form inputs
    setContactName('');
    setContactMobile('')
    setContactmsg('');
    setEmaill('');
    
  };

  return (
    <div className="container_contact">
      <div className="row">
        <div className="col">
          {showForm ? (
            <div className="form_section">
              <div className='contact'>
                <div className='contact_form'>
               <br/> <p className='better'>Drop us a Line!</p>
               <input className="input" type='text' placeholder='Enter your Name'value={contactName} onChange={(e) => setContactName(e.target.value)} />
               <input className="input" type='text' placeholder='Enter your Mobile No'value={contactmobile} pattern="[0-9]{9}" maxLength={10} onChange={(e) => setContactMobile(e.target.value)}/>
               <input className="input" type='text' placeholder='Enter your Email Id'value={emaill} onChange={(e) => setEmaill(e.target.value)}/>
               <textarea className="textarea" type="text" col="8" placeholder="Enter Your Message" value={contactmsg} onChange={(e) => setContactmsg(e.target.value)} /><br/>
               <button className='submit_form btn-sep icon-send"' onClick={handleSubmit} onSubmit={handleSubmit} >SEND</button>
              <button onClick={handleCancelClick} className='cancel'>Cancel</button>
            </div>
            </div>
            </div>
          ) : (
            <div className='contact'>
                <br/><br/>
              <p className='contact_title'>Contact for Industrial Equipments and Services</p>
              <hr/>
              <p className='better'>Better yet, see us in person!</p>
              <p className='we'>We love our customers, so feel free to visit during normal business hours.</p>
              <button className='whatsapp'>
                <a className="wp" href="https://api.whatsapp.com/send/?phone=917774848175&text&type=phone_number&app_absent=0"> 
                  <img src='/images/whatsapp.png'/>   Message us on WhatsApp
                </a>
              </button>
              <p className='better'>EliteBridge Business Solutions India LLP</p>
              <p className='we'>302, SR- Shejwal Park, Kharadi, Pune, Maharashtra, India</p>
              <p className='we'>
                <a className="mail" href="mailto:sales@elitebridge.in">
                  sales@elitebridge.in
                </a>
              </p>
              <button onClick={handleButtonClick} className='drop'>Drop Us a Line!</button>
            </div>
          )}
        </div>
        <div className="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4588498839944!2d73.92997247432055!3d18.553340968174073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1473bb8b999%3A0x99b7240874468602!2sEliteBridge%20Business%20Solutions%20India%20LLP!5e0!3m2!1sen!2sin!4v1690366978496!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;