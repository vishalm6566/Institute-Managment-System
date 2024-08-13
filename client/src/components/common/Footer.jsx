import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid p-0" style={{marginLeft : 0}}>
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#F8F9FA' }}>
        <section className="d-flex justify-content-between p-4 text-white" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Institute Management System</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                The Institute Management System (IMS) aims to provides a centralised platform for administrators, teachers and students for managing the academic tasks, monitor students’ performance and encourage enhanced engagement.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Course Management</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Student Portal</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Faculty Portal</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Administration</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Admin</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Student</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Teacher</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> Pune, 411041, India</p>
                <p><i className="fas fa-envelope mr-3"></i> admin@test.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 91 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 91 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">Institute Managment System</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
