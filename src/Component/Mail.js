import React from 'react';
import '../Component_CSS/mail.css'; 

class Mail extends React.Component {
  constructor() {
    super();
    this.emailInput = React.createRef();
  }

  handleSubmit = () => {
    const email = this.emailInput.current.value;
    // Here you can add code to submit the email or show a subscription confirmation
    alert(`Thank you for subscribing with ${email}!`);
    this.emailInput.current.value = ''; // Clearing the input after submission
  };

  render() {
    return (
      <div className="subscribe-container">
        <h3>Subscribe for Emails</h3>
        <p>Enjoy 15% off* on Your First Order When You Subscribe to our Emails</p>
        <input
          type='email'
          ref={this.emailInput}
          placeholder='Enter your email'
        />
        <button onClick={this.handleSubmit}>Subscribe!</button>
      </div>
    );
  }
}

export default Mail;
