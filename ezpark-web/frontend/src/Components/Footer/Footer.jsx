import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div>
              <h3>Logo</h3>
              <p className="mb-30 footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                soluta facilis eos quia optio iusto odit atque eum tempore,
                quisquam officiis vero veniam hic,
              </p>
            </div>
          </div>
          <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
            <div className="">
              <h4>Quick Link</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/signup" className="text-decoration-none">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" className="text-decoration-none">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/supoort" className="text-decoration-none">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <p>Katubedda,Moratuwa</p>
                </li>
                <li>
                  <p>011-4545567</p>
                </li>
                <li>
                  <p>EzPark@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Follow Us on</h4>
              <div>
                <ul className="d-flex gap-3 list-unstyled">
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="copyright">
            <p>Developed and maintained by company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
