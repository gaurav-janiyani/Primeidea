"use client"
import Image from "next/image";
import { Notyf } from "notyf";
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    // Add new state for verification
    const [verificationState, setVerificationState] = useState({
        isVerifying: false,
        verified: false,
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendVerificationCode = async () => {
        const notyf = new Notyf({
            position: { x: "right", y: "top" },
            duration: 5000,
        });
        
        if (!formData.phone) {
            notyf.error('Please enter a phone number');
            return;
        }

        try {
            console.log('Sending verification code to:', formData.phone); // Debug log
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ 
                    phone: formData.phone,
                    action: 'send'
                })
            });

            const data = await response.json();
            console.log('Verification response:', data); // Debug log

            if (response.ok && data.status === 'sent') {
                setVerificationState(prev => ({ ...prev, isVerifying: true }));
                notyf.success(data.message || 'Verification code sent!');
            } else {
                throw new Error(data.error || 'Failed to send verification code');
            }
        } catch (error) {
            console.error('Verification error:', error);
            notyf.error(error.message || 'Error sending verification code');
        }
    };

    const verifyOTP = async () => {
        const notyf = new Notyf({
            position: { x: "right", y: "top" },
            duration: 5000,
        });

        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: formData.phone,
                    code: verificationState.otp,
                    action: 'verify'
                })
            });

            const data = await response.json();
            if (data.status === 'approved') {
                setVerificationState(prev => ({ ...prev, verified: true, isVerifying: false }));
                notyf.success('Phone number verified!');
            } else {
                notyf.error('Invalid verification code');
            }
        } catch (error) {
            notyf.error('Error verifying code');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const notyf = new Notyf({
            position: {
                x: "right",
                y: "top",
            },
            duration: 5000,
        });

        if (!verificationState.verified) {
            notyf.error('Please verify your phone number first');
            return;
        }
    
        if (!formData.fullName || !formData.email || !formData.description) {
            notyf.error('Please fill in all required fields');
            return;
        }
    
        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });
    
        // Create form data object
        const formDataObj = new FormData();
        formDataObj.append('_wpcf7', '48'); // Form ID
        formDataObj.append('_wpcf7_version', '5.7.7'); // CF7 version
        formDataObj.append('_wpcf7_locale', 'en_US'); // Locale
        formDataObj.append('_wpcf7_unit_tag', `wpcf7-f48-p${Date.now()}`); // Dynamic unit tag
        formDataObj.append('_wpcf7_container_post', '0');
        formDataObj.append('fullName', formData.fullName);
        formDataObj.append('email', formData.email);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('description', formData.description);
    
        try {
            const path = 'https://primeidea.kashyappandya.com'
            const response = await fetch(`${path}/wp-json/contact-form-7/v1/contact-forms/48/feedback`, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json',
                    // Don't set Content-Type header when sending FormData
                },
                mode: 'cors', // Enable CORS
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            if (data.status === 'mail_sent') {
                setSubmitStatus({
                    success: true,
                    message: 'Thank you for your message. We will get back to you soon!'
                });
                notyf.success('Thank you for your message. We will get back to you soon!');
                setFormData({ fullName: '', email: '', phone: '', description: '' });
            } else {
                setSubmitStatus({
                    success: false,
                    message: data.message || 'There was an error sending your message. Please try again.'
                });
                notyf.error(data.message || 'There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                success: false,
                message: 'There was an error sending your message. Please try again.'
            });
            notyf.error('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>               
            <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email" 
                required
                className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
            />
            <div className="flex gap-2">
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone No" 
                    required
                    disabled={verificationState.verified}
                    className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]" 
                />
                {!verificationState.verified && !verificationState.isVerifying && (
                    <button
                        type="button"
                        onClick={sendVerificationCode}
                        className="bg-[#293C7D] text-white px-4 py-2 rounded-md"
                    >
                        Verify
                    </button>
                )}
            </div>

            {verificationState.isVerifying && !verificationState.verified && (
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={verificationState.otp}
                        onChange={(e) => setVerificationState(prev => ({ ...prev, otp: e.target.value }))}
                        className="mb-4 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6]"
                    />
                    <button
                        type="button"
                        onClick={verifyOTP}
                        className="bg-[#293C7D] text-white px-4 py-2 rounded-md"
                    >
                        Submit OTP
                    </button>
                </div>
            )}
            <textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                rows="4" 
                placeholder="Enter Your Message" 
                required
                className="mb-6 block font-medium w-full px-3 py-3 border border-[#f6f6f6] shadow-sm bg-[#f6f6f6] text-[#1f4153] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[16px]"
            ></textarea>
            {submitStatus.message && (
                <div className={`p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                </div>
            )}
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 w-full text-center disabled:opacity-50"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}

export default ContactForm;