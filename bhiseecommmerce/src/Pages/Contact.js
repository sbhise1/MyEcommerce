import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='main-container'>
      <div className='second-container'>
        <div>
          <div className='intro-contact'>
            <h1>
              Say Hello.
            </h1>
            <p>Qui dolore ipsum quia dolor sit amet, consectetur   <br /> adipisci velit, sed quia non numquam eius   <br /> modi Neque porro quis quam est.</p>
            <h4>
              212 7th St SE, Washington, DC 20003, USA
            </h4>
            <h4>
              info@example.com
            </h4>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000.475060774945!2d73.73601715!3d19.961507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721708110258!5m2!1sen!2sin"
            title="Contact Form" style={{ width: "600px", height: "350px", border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <div>
          <div className="contact-container">
            <div className="contact-header">
              <h2>Send Us A Message</h2>
            </div>
            <form className="contact-form">
              <div className="form-group ">
                <div className='group-first'>
                  <div>
                    <input type="text" name="firstName" placeholder="First Name" required />
                  </div>
                  <div>
                    <input type="text" name="lastName" placeholder="Last Name" required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <button className='submitbtn' type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div className='Contact-bottom'>
        <div className='center'>
          <div>
            <h3>
              Business
            </h3>
          </div>
          <div>
            <h2>
              123 456 7890
            </h2>
          </div>
        </div>
        <div className='center'>
          <div>
            <h3>
              Order
            </h3>
          </div>
          <div>
            <h2>
              123 456 7890
            </h2>
          </div>
        </div>
        <div className='center'>
          <div>
            <h3>
              Support
            </h3>
          </div>
          <div>
            <h2>
              123 456 7890
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact