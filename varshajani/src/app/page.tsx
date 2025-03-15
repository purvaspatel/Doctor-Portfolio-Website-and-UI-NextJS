'use client';
/* eslint-disable react/no-unescaped-entities */

import React, { useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display, Lato } from 'next/font/google';
import Head from 'next/head';
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar } from 'react-icons/fa';

// Font setup
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export default function Home() {
  // Create refs for each section
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };


  return (

    <div className={`${playfair.variable} ${lato.variable} font-sans min-h-screen bg-neutral-50`}>
      <Head>
        <title>Ayurveda Wellness | Personalized Ayurvedic Healing</title>
        <meta name="description" content="Experience personalized Ayurvedic treatments and wellness consultations from our expert Ayurvedic doctor. Book your consultation today." />
        <meta name="keywords" content="ayurveda, ayurvedic doctor, holistic healing, wellness consultation, natural medicine" />
        <link rel="canonical" href="https://www.ayurvedawellness.com" />
      </Head>

      {/* Navigation - Fixed for better UX */}
      <nav className="py-4 px-6 md:px-12 lg:px-24 bg-neutral-50 border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 text-sage-600 text-xl md:text-2xl font-playfair font-semibold">
            <Image src="/assets/logo.png" alt="Ayurveda Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
            <span>AYURVEDA WELLNESS</span>
          </div>
          <div className="hidden md:flex space-x-8 text-neutral-700 text-sm font-lato">
            <button onClick={() => scrollToSection(homeRef)} className="hover:text-sage-600 transition duration-300">HOME</button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-sage-600 transition duration-300">ABOUT US</button>
            <button onClick={() => scrollToSection(servicesRef)} className="hover:text-sage-600 transition duration-300">SERVICES</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-sage-600 transition duration-300">CONTACT</button>
          </div>
          <div className="md:hidden">
            <button
              className="text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 font-lato text-neutral-700">
            <button onClick={() => scrollToSection(homeRef)} className="py-2 hover:text-sage-600 transition duration-300">HOME</button>
            <button onClick={() => scrollToSection(aboutRef)} className="py-2 hover:text-sage-600 transition duration-300">ABOUT US</button>
            <button onClick={() => scrollToSection(servicesRef)} className="py-2 hover:text-sage-600 transition duration-300">SERVICES</button>
            <button onClick={() => scrollToSection(contactRef)} className="py-2 hover:text-sage-600 transition duration-300">CONTACT</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-neutral-600 mb-2 font-lato">
              YOUR AYURVEDIC JOURNEY STARTS HERE
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-4">
              The <span className="text-amber-500">Transformative</span><br />
              Power Of Ayurveda
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6">
              <span className="text-amber-500">Dr. Varsha Jani</span>
            </h1>
            <p className="text-neutral-600 mb-8 font-lato">
              Welcome to our Ayurveda wellness, where health and wellness meet expert guidance and personalized care.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-700 px-6 py-3 rounded-md inline-flex items-center justify-center transition duration-300 font-lato"
              >
                BOOK A CONSULT
              </button>
            </div>
          </div>

          {/* Image Section - Always Visible on All Screens */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
              <Image
                src="/assets/main.jpeg"
                alt="Ayurvedic Doctor"
                width={500}
                height={600}
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section ref={aboutRef} className="py-16 px-6 md:px-12 lg:px-24 bg-[#f5f7f2] scroll-mt-16">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -left-4 top-12 w-16 h-16 opacity-20 hidden md:block">
            <Image
              src="/assets/tulsi.jpg"
              alt="Decorative leaf"
              width={60}
              height={60}
            />
          </div>
          <div className="absolute -right-4 bottom-12 w-16 h-16 opacity-20 hidden md:block">
            <Image
              src="/assets/herbs3.jpg"
              alt="Decorative herb"
              width={60}
              height={60}
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-2">
              Personalized Ayurvedic &<br />
              Wellness Counseling
            </h2>
            <p className="text-sm uppercase tracking-wider text-neutral-600 font-lato">
              LED BY A TEAM OF DEDICATED AND SKILLED AYURVEDIC PRACTITIONERS
            </p>
          </div>
          <p className="text-neutral-700 max-w-3xl mx-auto text-center mb-10 font-lato">
            At our practice, we empower you to prioritize your health with personalized Ayurvedic and wellness counseling. We prioritize treatments inspired by health-fueled principles. Each visit, we provide high-quality care tailored to your needs. Plus, we accept insurance, ensuring our services are accessible to all. Take charge of your well-being with Ayurveda Wellness solutions today.
          </p>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

          {/* Image Section - Hidden on Mobile */}
          <div className="md:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-0">

            {/* Hidden on Mobile */}
            <div className="relative w-full h-40 sm:h-48 hidden sm:block">
              <Image
                src="/assets/herbs.jpg"
                alt="Ayurvedic herbs and spices"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 45vw, 25vw"
              />
            </div>

            {/* Hidden on Mobile */}
            <div className="relative w-full h-40 sm:h-48 hidden sm:block">
              <Image
                src="/assets/oil.jpg"
                alt="Ayurvedic oils and treatments"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 45vw, 25vw"
              />
            </div>

            {/* Hidden on Mobile */}
            <div className="relative w-full h-40 sm:h-48 sm:col-span-2 hidden sm:block">
              <Image
                src="/assets/yoga2.jpg"
                alt="Ayurvedic balanced diet"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>

          </div>

          {/* Text Section */}
          <div className="md:w-7/12 md:pl-12 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-neutral-600 mb-2 font-lato">
              HOLISTIC AYURVEDIC SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair mb-6">
              How We Can Help
            </h2>
            <p className="text-neutral-700 font-lato">
              Through comprehensive assessments, thoughtful analysis, and collaborative goal-setting, we work closely with our clients to develop practical and sustainable Ayurvedic plans.
            </p>
            <p className="text-neutral-700 mt-4 font-lato">
              Whether the aim is improved digestion, balanced doshas, enhanced immune function, reduced stress, better sleep, or healthier eating habits, we provide the expertise and support needed to succeed.
            </p>
          </div>

        </div>
      </section>




      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2 text-center font-lato">READ THE SUCCESS STORIES</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-8 md:mb-12 text-center">
            <span className="text-amber-500">Kind Words</span> From<br />
            Our Past Clients
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-center mb-8 md:mb-12 font-lato">
            We are committed to empowering individuals on their journey to optimal health through evidence-based Ayurvedic expertise and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-700 mb-6 font-lato">
                "Life changed! Since adopting everything Ayurveda taught me, my digestion improved and I've never more in tune with my body. Each session has been so meaningful. It's my favorite wellness routine - one I look forward to!"
              </p>
              <p className="text-neutral-900 font-medium font-lato">- LAHIRI</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-700 mb-6 font-lato">
                "I'm so glad I found Ayurveda! When I was struggling with sleep issues, this was the only medicine that I could rely on who was able to give me the advice I tried that helped me lose weight and feel more like me!"
              </p>
              <p className="text-neutral-900 font-medium font-lato">- ALEX</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-700 mb-6 font-lato">
                "They have helped me understand that health is what we put in our bodies. It was so good to get an expert focused on my health concerns and truly personalized to her craft. Highly recommend them!"
              </p>
              <p className="text-neutral-900 font-medium font-lato">- MICHELLE</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-8 h-8 rounded-full bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-600 flex items-center justify-center transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-600 flex items-center justify-center transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section ref={servicesRef} className="py-16 px-6 md:px-12 lg:px-24 bg-[#f5f7f2] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2 text-center font-lato">WITHIN OUR INDIVIDUAL CONSULTATIONS, WE COVER A WIDE RANGE OF TOPICS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-6 text-center">
            From meal planning and mindful eating<br className="hidden md:block" />
            to <span className="text-amber-500">Ayurvedic strategies</span> for stress<br className="hidden md:block" />
            management and disease prevention
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sage-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 font-playfair">Dosha Assessment</h3>
              <p className="text-neutral-700 font-lato">
                Discover your unique Ayurvedic constitution and learn how to maintain balance for optimal health.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sage-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 font-playfair">Herbal Treatments</h3>
              <p className="text-neutral-700 font-lato">
                Personalized herbal remedies and supplements based on ancient Ayurvedic wisdom adapted to your needs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sage-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 font-playfair">Lifestyle Counseling</h3>
              <p className="text-neutral-700 font-lato">
                Guidance on daily routines, sleep patterns, and stress management techniques aligned with Ayurvedic principles.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-700 px-6 md:px-8 py-3 md:py-4 rounded-md inline-flex items-center justify-center transition duration-300 font-lato"
            >
              EXPLORE ALL SERVICES
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section ref={contactRef} className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Map */}
            <div className="h-64 sm:h-80 md:h-96 bg-neutral-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215277301196!2d-73.9864090843076!3d40.748440979327535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647358023080!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-6">Visit Our Wellness Center</h2>
              <p className="text-neutral-700 mb-8 font-lato">
                We invite you to experience the transformative power of Ayurveda in our peaceful and welcoming wellness center. Schedule a consultation today to begin your journey toward balanced, sustainable wellness.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 font-playfair">Our Location</h3>
                    <p className="text-neutral-700 font-lato">350 Fifth Avenue, New York, NY 10118</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 font-playfair">Phone Number</h3>
                    <p className="text-neutral-700 font-lato">(212) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8ede1] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 font-playfair">Email Address</h3>
                    <p className="text-neutral-700 font-lato">info@ayurvedawellness.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10">
                <button
                  className="bg-[#5f7346] hover:bg-[#4b5b37] text-white px-6 md:px-8 py-3 md:py-4 rounded-md inline-flex items-center justify-center transition duration-300 font-lato"
                >
                  BOOK A CONSULTATION
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#3d492e] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 font-playfair">Ayurveda Wellness</h3>
              <p className="text-sage-200 mb-6 font-lato">
                Personalized Ayurvedic solutions for modern wellness challenges, rooted in ancient wisdom.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 font-playfair">Quick Links</h3>
              <ul className="space-y-2 font-lato">
                <li><button onClick={() => scrollToSection(homeRef)} className="text-sage-200 hover:text-white transition duration-300">Home</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="text-sage-200 hover:text-white transition duration-300">About Us</button></li>
                <li><button onClick={() => scrollToSection(servicesRef)} className="text-sage-200 hover:text-white transition duration-300">Our Services</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className="text-sage-200 hover:text-white transition duration-300">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 font-playfair">Office Hours</h3>
              <ul className="space-y-2 font-lato">
                <li className="flex justify-between"><span>Monday - Friday:</span> <span>9am - 7pm</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>10am - 5pm</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 font-playfair">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-[#4b5b37] hover:bg-[#5f7346] flex items-center justify-center transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4b5b37] hover:bg-[#5f7346] flex items-center justify-center transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4b5b37] hover:bg-[#5f7346] flex items-center justify-center transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4b5b37] hover:bg-[#5f7346] flex items-center justify-center transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>



            </div>
          </div>

          <div className="border-t border-#f5f7f2 mt-12 pt-8 text-center">
            <p className="text-sage-300 font-lato">
              &copy; {new Date().getFullYear()} Ayurveda Wellness. All rights reserved.
            </p>
          </div>
          <div className="pt-8 text-center">
            <p className="text-sage-300 font-lato">
              Created by Purva Patel - <span><a href="mailto:purvaspatel1241@gmail.com" className="text-white hover:underline ml-1">
                @purvaspatel1241@gmail.com
              </a></span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
