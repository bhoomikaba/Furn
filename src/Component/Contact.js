import React, { useRef } from 'react';
import '../Component_CSS/Contact.css';

export default function Contact() {
  const sendLetterRef = useRef(null);

  function addClass() {
    document.body.classList.add("sent");
  }
  
  return (
    <>
      <div className='cbody'>
        <small>Enter Your message and click button "Send"</small>
        <div className="wrapper centered">
          <article className="letter">
            <div className="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message"></textarea>
              </p>
            </div>
            <div className="side">
              <p>
                <input type="text" placeholder="Your name" />
              </p>
              <p>
                <input type="email" className='mail' placeholder="Your email" />
              </p>
              <p>
                <button ref={sendLetterRef} onClick={addClass}>Send</button>
              </p>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <p className="result-message centered">Thank you for your message</p>
      </div>
    </>
  );
}
