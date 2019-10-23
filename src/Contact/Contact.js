import React, { Component } from 'react';
import './Contact.css';
// import { createRequireFromPath } from 'module';

class Contact extends Component {

  render() {

    return (
      <div className="Contact">
        <div>
          <h2 className="page-logo" alt="contact logo">CONTACT</h2>
        </div>        
        <section className='contact'>
            <div id ="contact-info">
                <p className="contact-text">If you're interested in chatting or want more information about what I've been working on, I'd love to hear from you!</p>
            </div>
            <div className="contact-container" >
                <div className="contact-item">
                    <a href="https://github.com/JakeG6" >
                      <img src={require("./contact-images/GitHub-Mark-Light-120px-plus.png")} alt="Github logo" className="contact-link-logo" />
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/jake-guss/" className="contact-link-logo">
                      <img src={require("./contact-images/LinkedIn_logo_initials.png")} alt="LinkedIn logo" className="contact-link-logo" />
                    </a>
                </div>
                <div className="contact-item">
                    <a href="mailto:jakeguss@gmail.com" className="contact-link-logo">
                      <img src={require("./contact-images/email-logo.png")} alt="Email logo" className="contact-link-logo" />
                    </a>
                </div>        
            </div>
        </section>
      </div>
    );
  }
}

export default Contact;
