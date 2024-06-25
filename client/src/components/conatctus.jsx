import React from 'react';
import NavBar from './admin/Navbar';

const ContactUs = () => {
  return (
    <>
        <NavBar />
      <div className="container-fluid my-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
