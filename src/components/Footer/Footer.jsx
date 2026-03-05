import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
                  <MapPin size={18}/>
                  <span>Andhra Pradesh, India</span>
                </li>

                <li>
                  <Mail size={18}/>
                  <a href="mailto:info@dhiaspireai.com">
                    info@dhiaspireai.com
                  </a>
                </li>

                <li>
                  <Phone size={18}/>
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
                    href="https://www.linkedin.com/company/dhiaspireai" 
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