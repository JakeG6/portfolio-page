import React, { Component } from 'react';



class Contact extends Component {
  render() {
    return (
      	<div className="Contact">
                <img id="contact-png" src="Images/contact-logo.png" alt="contact logo"/>
                <h2 className="contact-title">CONTACT</h2>
                <section className='contact'>
                    <div id ="contact-info">
                        <p className="contact-text">If you're interested in chatting or want more information about what I've been working on, I'd love to hear from you!</p>
                    </div>
                    <div className="mobile-buttons">
                        <div className= "phone-button">
                            <a href="tel:555-555-1212">CALL ME</a>
                        </div>
                        <div className= "email-button">
                            <a href="mailto:jakeguss@gmail.com">EMAIL ME</a>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div className="contact-item">
                            <p className="phone">PHONE</p>
                        </div>
                        <div className="contact-item">
                            <a href = "tel:555-555-1212" className="phone-number">+1 (111) 555-1234</a>
                        </div>	
                        <div className="contact-item">
                            <p className="email-me">EMAIL</p>
                        </div>
                        <div className="contact-item">	
                            <a href="mailto:jakeguss@gmail.com" className="email-address">jakeguss@gmail.com</a>
                        </div>
                    </div>
                
                </section>

      </div>
    );
  }
}

export default Contact;
