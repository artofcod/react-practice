import React from 'react';

export default 
class Contactus extends React.Component{
    render(){
        return(
            <section id="contact" className="contact section-bg">
            <div className="container">
      
              <div className="section-title">
                <h2>Contact Us</h2>
              </div>
      
              <div className="row justify-content-center">
      
                <div className="col-lg-3 col-md-5 mb-5 mb-md-0">
                  <div className="info">
                    <div className="address">
                      <i className="bx bx-map"></i>
                      <p>A108 Adam Street<br/>New York, NY 535022</p>
                    </div>
      
                    <div className="email">
                      <i className="bx bx-envelope"></i>
                      <p>info@example.com</p>
                    </div>
      
                    <div className="phone">
                      <i className="bx bx-phone-call"></i>
                      <p>+1 5589 55488 55s</p>
                    </div>
                  </div>
      
                  <div className="social-as">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="aedin"><i className="bx bxl-aedin"></i></a>
                  </div>
      
                </div>
      
                <div className="col-lg-5 col-md-7">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
}