// File: app/contact/page.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Ayurveda Wellness',
  description: 'Contact our Ayurvedic wellness center to book consultations or inquire about our services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-8 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-sage-600 text-white p-8 md:p-12">
              <h1 className="text-3xl font-playfair mb-6">Get in Touch</h1>
              <p className="mb-8 font-lato">We're here to help you on your wellness journey. Send us a message and we'll get back to you as soon as possible.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sage-500 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 font-playfair">Our Location</h3>
                    <p className="text-sage-100 font-lato">350 Fifth Avenue, New York, NY 10118</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-500 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 font-playfair">Phone Number</h3>
                    <p className="text-sage-100 font-lato">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-500 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 font-playfair">Email Address</h3>
                    <p className="text-sage-100 font-lato">info@ayurvedawellness.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4 font-playfair">Office Hours</h3>
                <div className="space-y-2 font-lato">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-playfair mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}