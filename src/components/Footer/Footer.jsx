import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { subscribeNewsletter } from "../../services/newsletterApi";
import Toast from "../Toast/Toast";
import "./Footer.scss";

// Import Social Icons from Assets
import WhatsAppIcon from "/assets/home-assets/FooterAssets/icons/whatsapp.svg";
import InstagramIcon from "/assets/home-assets/FooterAssets/icons/instagram.svg";
import LinkedInIcon from "/assets/home-assets/FooterAssets/icons/linkedin.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await subscribeNewsletter(email);

      setToast({
        message: response.message || "Subscribed successfully!",
        type: "success",
      });

      setEmail("");
    } catch (error) {
      setToast({
        message: error.message || "Failed to subscribe.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      {/* Shared Gradient for Icons */}
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#232A86" />
          <stop offset="100%" stopColor="#52B7FF" />
        </linearGradient>
      </svg>

      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h3>Join a Newsletter</h3>

            <p>
              Get updates delivered straight <br /> to your inbox.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* LINKS */}
          <div className="footer-links">

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><Link to="/solutions/student">For Students</Link></li>
                <li><Link to="/solutions/college">For College</Link></li>
                <li><Link to="/solutions/employee">For Employees</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/company">About Us</Link></li>
                <li><Link to="/company">Career</Link></li>
                <li><Link to="/company">Contact</Link></li>
                <li><Link to="/company">Blog</Link></li>
              </ul>
            </div>

            <div className="footer-col contact">
              <h4>Contact</h4>

              <ul>
                <li className="location">
                  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 5.625C6.46438 5.625 5.625 6.46438 5.625 7.5C5.625 8.53562 6.46438 9.375 7.5 9.375C8.53562 9.375 9.375 8.53562 9.375 7.5C9.375 6.46438 8.53562 5.625 7.5 5.625ZM7.5 10.625C5.77437 10.625 4.375 9.22625 4.375 7.5C4.375 5.77375 5.77437 4.375 7.5 4.375C9.22563 4.375 10.625 5.77375 10.625 7.5C10.625 9.22625 9.22563 10.625 7.5 10.625ZM7.5 0C3.35813 0 0 3.35813 0 7.5C0 10.6363 6.25313 20.0069 7.5 20C8.7275 20.0069 15 10.5938 15 7.5C15 3.35813 11.6419 0 7.5 0Z" fill="url(#icon-gradient)"/>
                  </svg>
                  <span>Andhra Pradesh, India</span>
                </li>

                <li>
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.73589 3.96702e-07H15.0941C15.5071 -8.77205e-06 15.8634 -1.8026e-05 16.1584 0.0195756C16.4689 0.0402144 16.7795 0.0856 17.0864 0.209378C17.7784 0.488548 18.3284 1.02403 18.615 1.69801C18.7421 1.99684 18.7887 2.29933 18.8099 2.60174C18.83 2.88896 18.83 3.23598 18.83 3.63817V11.0318C18.83 11.434 18.83 11.781 18.8099 12.0683C18.7887 12.3707 18.7421 12.6731 18.615 12.972C18.3284 13.6459 17.7784 14.1815 17.0864 14.4606C16.7795 14.5844 16.4689 14.6298 16.1584 14.6505C15.8634 14.67 15.5071 14.67 15.0941 14.67H3.73588C3.32289 14.67 2.96655 14.67 2.67162 14.6505C2.36108 14.6298 2.05047 14.5844 1.74361 14.4606C1.05153 14.1815 0.501669 13.6459 0.215001 12.972C0.0878988 12.6731 0.0412945 12.3707 0.0201013 12.0683C-1.85101e-05 11.781 -9.00764e-06 11.434 4.07357e-07 11.0318V3.63818C-9.00764e-06 3.23599 -1.85101e-05 2.88896 0.0201013 2.60174C0.0412945 2.29933 0.0878988 1.99684 0.215001 1.69801C0.501669 1.02403 1.05153 0.488548 1.74361 0.209378C2.05047 0.0856 2.36108 0.0402144 2.67162 0.0195756C2.96655 -1.8026e-05 3.3229 -8.77205e-06 3.73589 3.96702e-07ZM2.18188 2.08843C2.52429 1.70735 3.1191 1.66873 3.51042 2.00218L8.79502 6.50523C9.14997 6.80771 9.68003 6.80771 10.035 6.50523L15.3196 2.00218C15.7109 1.66873 16.3057 1.70735 16.6481 2.08843C16.9905 2.46952 16.9509 3.04877 16.5596 3.38221L11.2749 7.88531C10.21 8.79274 8.62 8.79274 7.55507 7.88531L2.27046 3.38221C1.87913 3.04877 1.83947 2.46952 2.18188 2.08843Z" fill="url(#icon-gradient)"/>
                  </svg>
                  <a href="mailto:info@dhiaspireai.com">
                    info@dhiaspireai.com
                  </a>
                </li>

                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6404 17.3282C19.0231 19.2042 16.6044 20.1398 14.8764 19.9838C12.5164 19.7704 9.9484 18.5187 7.99906 17.14C5.13373 15.1133 2.44973 11.9784 0.885727 8.65173C-0.219606 6.30106 -0.467603 3.41093 1.1764 1.26827C1.7844 0.476266 2.44173 0.0532764 3.42973 0.00394311C4.8004 -0.0627236 4.9924 0.721412 5.46306 1.94275C5.81373 2.85608 6.28173 3.78774 6.54306 4.73441C7.03239 6.50108 5.32173 6.57492 5.10573 8.01892C4.97106 8.92958 6.07506 10.1508 6.57373 10.8002C7.55106 12.0722 8.72573 13.1693 10.0511 14.0039C10.8097 14.4826 12.0351 15.3452 12.9044 14.8692C14.2431 14.1358 14.1164 11.8786 15.9884 12.6426C16.9577 13.0373 17.8964 13.6068 18.8217 14.1055C20.2524 14.8748 20.1857 15.6722 19.6404 17.3282C20.0484 16.0908 19.2324 18.5655 19.6404 17.3282Z" fill="url(#icon-gradient)"/>
                  </svg>
                  <a href="tel:+917207736051">
                    +91 72077 36051
                  </a>
                </li>
              </ul>

              <div className="connect-us">
                <span>Connect Us!</span>
                <div className="social-icons">
                  <a 
                    href="https://wa.me/917207736051" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp"
                  >
                    <img src={WhatsAppIcon} alt="WhatsApp" />
                  </a>
                  <a 
                    href="https://www.instagram.com/dhiaspireai/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="instagram"
                  >
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/dhiaspire-ai/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin"
                  >
                    <img src={LinkedInIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2024 DhiAspire. All rights reserved.</p>
        </div>

      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </footer>
  );
};

export default Footer;