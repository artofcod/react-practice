import React from 'react';
// import logo from '../logo.svg';
import './App.css';
// import { a } from 'react-router-dom'

function App() {
  return (
    <div>
    <header id="header">
        <div className="container-fluid">
    
          <div className="logo float-left">
            <h1 className="text-light"><a href="index.html"><span>Siimple</span></a></h1>
            <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          </div>
    
          <button type="button" className="nav-toggle"><i className="bx bx-menu"></i></button>
          <nav className="nav-menu">
            <ul>
              <li className="active"><a href="#header">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
    
        </div>
      </header>
    
      <section id="hero">
        <div className="hero-container">
          <h1>Welcome to Siimple</h1>
          <h2>Please, fill out the for below to be notified for the latest updates!</h2>
    
          <form onsubmit="return false" method="post" role="form" className="php-email-form">
            <div className="row no-gutters">
              <div className="col-md-6 form-group pr-md-1">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group pl-md-1">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
    
            <div className="mb-1">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your notification request was sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Notify me!</button></div>
          </form>
        </div>
      </section>
    
      <main id="main">
    
        <section id="about" className="about">
          <div className="container">
    
            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/about-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
    
          </div>
        </section>
    
        <section id="why-us" className="why-us section-bg">
          <div className="container">
    
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src="assets/img/why-us-1.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="bx bx-book-reader"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src="assets/img/why-us-2.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="bx bx-calendar-edit"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src="assets/img/why-us-3.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="bx bx-landscape"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </section>
    
        <section className="faq">
          <div className="container">
    
            <div className="section-title">
              <h2>Frequenty Asked Questions</h2>
            </div>
    
            <ul className="faq-list">
    
              <li>
                <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq1" className="collapse" data-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>
    
              <li>
                <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq2" className="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
    
              <li>
                <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq3" className="collapse" data-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>
    
              <li>
                <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq4" className="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
    
              <li>
                <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq5" className="collapse" data-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>
    
              <li>
                <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq6" className="collapse" data-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
    
            </ul>
    
          </div>
        </section>
    
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
    
      </main>
    
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Siimple</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      </div>
  );
}

export default App;
