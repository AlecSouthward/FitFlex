import { Link } from 'react-router-dom';
import '../CSS/Contact.css'

const Contact = () => (
    <div>
        {/* If the user is logged in, display the contact page
        otherwise display a message to sign in and a link to the SignIn page */}
        {
            !localStorage.getItem('user') ?
                <h2>Please <Link to='/signin'>Sign in</Link></h2>
                :
                <div className="contact">
                    <h1 style={{ textAlign: "center" }}>Contact Us</h1>

                    <p>Subject of your Message:</p>
                    <input type="text" className="subject"
                        size={30} placeholder="The Subject..." />

                    <p>Your Message:</p>
                    <input type="text" className="message"
                        size={50} height={30} placeholder="Your Message..." />

                    <button className='submit'>Submit</button>
                </div>
        }
    </div>
);

export default Contact;