import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Life changed! Since adopting everything Ayurveda taught me, my digestion improved and I've never been more in tune with my body. Each session has been so meaningful. It's my favorite wellness routine!",
    name: "LAHIRI",
  },
  {
    text: "I'm so glad I found Ayurveda! When I was struggling with sleep issues, this was the only medicine that helped me lose weight and feel more like me!",
    name: "ALEX",
  },
  {
    text: "They have helped me understand that health is what we put in our bodies. It was so good to get expert advice focused on my health concerns. Highly recommend them!",
    name: "MICHELLE",
  },
  {
    text: "Ayurveda transformed my life! I have more energy, better digestion, and feel healthier than ever before!",
    name: "SOPHIA",
  },
  {
    text: "Best decision ever! The expert advice and holistic approach truly made a difference in my life.",
    name: "RAHUL",
  },
  {
    text: "They have helped me understand that health is what we put in our bodies. It was so good to get expert advice focused on my health concerns. Highly recommend them!",
    name: "MICHELLE",
  },
  {
    text: "Ayurveda transformed my life! I have more energy, better digestion, and feel healthier than ever before!",
    name: "SOPHIA",
  },
  {
    text: "Best decision ever! The expert advice and holistic approach truly made a difference in my life.",
    name: "RAHUL",
  },
];

export default function Testimonials() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  // Calculate how many groups we have
  const groupCount = Math.ceil(testimonials.length / 3);
  
  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = (currentGroup * 3) % testimonials.length;
    const visibleTestimonials = [];
    
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    
    return visibleTestimonials;
  };

  const nextTestimonials = () => {
    setAutoScrollEnabled(false);
    setCurrentGroup((prev) => (prev + 1) % groupCount);
  };

  const prevTestimonials = () => {
    setAutoScrollEnabled(false);
    setCurrentGroup((prev) => (prev - 1 + groupCount) % groupCount);
  };

  // Auto-scroll timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (autoScrollEnabled) {
      timer = setInterval(() => {
        setCurrentGroup((prev) => (prev + 1) % groupCount);
      }, 5000); // Change every 5 seconds
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoScrollEnabled, groupCount]);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-50 scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2 text-center font-lato">
          READ THE SUCCESS STORIES
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-8 md:mb-12 text-center">
          <span className="text-amber-500">Kind Words</span> From<br />
          Our Past Clients
        </h2>
        <p className="text-neutral-700 max-w-3xl mx-auto text-center mb-8 md:mb-12 font-lato">
          We are committed to empowering individuals on their journey to optimal health through evidence-based Ayurvedic expertise and support.
        </p>

        {/* Testimonial Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 testimonials-container ${
            autoScrollEnabled ? 'testimonials-auto-scroll' : ''
          }`}
          onMouseEnter={() => setAutoScrollEnabled(false)}
          onMouseLeave={() => setAutoScrollEnabled(true)}
        >
          {getCurrentTestimonials().map((testimonial, index) => (
            <div 
              key={`${currentGroup}-${index}`} 
              className="testimonial-card bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between"
            >
              {/* Star Rating */}
              <div className="flex text-amber-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Testimonial Text */}
              <div className="testimonial-content mb-4 flex-grow">
                <p className="text-neutral-700 font-lato">"{testimonial.text}"</p>
              </div>

              {/* Name - Always at Bottom */}
              <p className="text-neutral-900 font-medium font-lato mt-auto">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={prevTestimonials}
            className="w-10 h-10 rounded-full bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-600 flex items-center justify-center transition-all duration-300"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextTestimonials}
            className="w-10 h-10 rounded-full bg-[#e8ede1] hover:bg-[#d1dbc4] text-sage-600 flex items-center justify-center transition-all duration-300"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: groupCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoScrollEnabled(false);
                setCurrentGroup(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentGroup ? "bg-amber-500 w-4" : "bg-neutral-300"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}