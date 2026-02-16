import React, { useState, useEffect } from 'react';
import Toast from '../Toast/Toast';
import './BookADemo.scss';

const BookADemo = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        organizationName: '',
        role: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setErrors({}); // Reset errors when opening
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen && !toast) return null;

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required';
        } else if (formData.contactNumber.length !== 10) {
            newErrors.contactNumber = 'Please enter a 10-digit mobile number';
        }

        if (!formData.organizationName.trim()) {
            newErrors.organizationName = 'Organization name is required';
        }

        if (!formData.role.trim()) {
            newErrors.role = 'Role or position is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'contactNumber') {
            // Only allow numbers and limit to 10 digits
            const numericValue = value.replace(/\D/g, '').substring(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: numericValue
            }));

            if (errors.contactNumber) {
                setErrors(prev => ({ ...prev, contactNumber: '' }));
            }
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const submissionData = {
                ...formData,
                contactNumber: `+91 ${formData.contactNumber}`
            };
            console.info('Submitting demo request:', submissionData);

            await new Promise(resolve => setTimeout(resolve, 1500));

            setToast({
                message: 'Demo requested successfully! We will contact you soon.',
                type: 'success'
            });

            setFormData({
                name: '',
                email: '',
                contactNumber: '',
                organizationName: '',
                role: ''
            });
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            setToast({
                message: 'Something went wrong. Please try again.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <div className="book-demo-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="header-content">
                                <h2>Book a Demo</h2>
                                <button className="close-btn" onClick={onClose} aria-label="Close">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                            <div className="header-divider"></div>
                        </div>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="modal-body">
                                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                    <label htmlFor="email">Email ID</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email ID"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className={`form-group ${errors.contactNumber ? 'has-error' : ''}`}>
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <div className="phone-input-wrapper">
                                        <span className="country-code">+91</span>
                                        <input
                                            type="tel"
                                            id="contactNumber"
                                            name="contactNumber"
                                            placeholder="Enter Your 10-digit Number"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            maxLength="10"
                                            autoComplete="tel"
                                        />
                                    </div>
                                    {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
                                </div>

                                <div className={`form-group ${errors.organizationName ? 'has-error' : ''}`}>
                                    <label htmlFor="organizationName">Organization Name</label>
                                    <input
                                        type="text"
                                        id="organizationName"
                                        name="organizationName"
                                        placeholder="Enter Your Organization"
                                        value={formData.organizationName}
                                        onChange={handleChange}
                                        autoComplete="organization"
                                    />
                                    {errors.organizationName && <span className="error-text">{errors.organizationName}</span>}
                                </div>

                                <div className={`form-group ${errors.role ? 'has-error' : ''}`}>
                                    <label htmlFor="role">Role / Position in Organization</label>
                                    <input
                                        type="text"
                                        id="role"
                                        name="role"
                                        placeholder="Enter Your Role / Position"
                                        value={formData.role}
                                        onChange={handleChange}
                                        autoComplete="organization-title"
                                    />
                                    {errors.role && <span className="error-text">{errors.role}</span>}
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn-cancel" onClick={onClose}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Book a Demo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    );
};

export default BookADemo;
