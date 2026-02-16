import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="footer-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--color-grad-start)" />
                        <stop offset="100%" stopColor="var(--color-grad-end)" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="footer-container">
               <div className="footer-top">
                    {/* Newsletter Section */}
                    <div className="footer-newsletter">
                        <h3>Join a Newsletter</h3>
                        <p>It has long been known that a reader's attention will be diverted from</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter Your Email Here" />
                            <button type="submit" className="newsletter-submit">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Links Sections */}
                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/solutions">For Students</Link></li>
                                <li><Link to="/solutions">For College</Link></li>
                                <li><Link to="/solutions">For Employees</Link></li>
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

                        <div className="footer-col contact-col">
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <MapPin size={22} />
                                    <span>Andhra Pradesh, India</span>
                                </li>
                                <li>
                                    <Mail size={22} />
                                    <a href="mailto:dhiaspireai@gmail.com">dhiaspireai@gmail.com</a>
                                </li>
                                <li>
                                    <Phone size={22} />
                                    <a href="tel:+917448406219">+91 7448406219</a>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 DhiAspire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
