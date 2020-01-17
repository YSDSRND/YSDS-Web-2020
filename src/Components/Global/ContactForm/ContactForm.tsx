import React from 'react';

const ContactForm : React.FC = () => {
    return (
        <form>
                  <label>Name</label>
                  <input type="text" name="name"></input>
                  
                  <label>Phone nr</label>
                  <input type="tel" name="phone"></input>

                  <label>Email</label>
                  <input type="email" name="email"></input>

                  <input type="submit" value="SEND" className="ysds-button"></input>
                </form> 
    )
}

export default ContactForm;