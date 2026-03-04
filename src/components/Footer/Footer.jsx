import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { subscribeNewsletter } from "../../services/newsletterApi";
import Toast from "../Toast/Toast";
import "./Footer.scss";

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

      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h3>Join a Newsletter</h3>

            <p>
              It has long been known that a reader’s attention will be diverted
              from
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

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
                <li>
                  <MapPin size={18}/>
                  <span>Andhra Pradesh, India</span>
                </li>

                <li>
                  <Mail size={18}/>
                  <a href="mailto:dhiaspireai@gmail.com">
                    dhiaspireai@gmail.com
                  </a>
                </li>

                <li>
                  <Phone size={18}/>
                  <a href="tel:+917448406219">
                    +91 7448406219
                  </a>
                </li>
              </ul>
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