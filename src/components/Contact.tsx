
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    });

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      details: ["+91 9876543210", "+91 1234567890"]
    },
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      details: ["info@rkbuilder.in", "contact@rkbuilder.in"]
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      details: ["123 Construction Avenue", "Bangalore, Karnataka 560001"]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary/80 mb-4 reveal-on-scroll">
            Get In Touch
          </span>
          
          <h2 className="mb-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
            Contact Us Today
          </h2>
          
          <p className="text-muted-foreground reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            Have questions or ready to start your project? Reach out to our team for personalized assistance and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-border/30 text-center reveal-on-scroll"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              
              {item.details.map((detail, idx) => (
                <p key={idx} className={cn(
                  "text-muted-foreground",
                  idx !== item.details.length - 1 && "mb-1"
                )}>
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal-on-scroll" style={{ animationDelay: '600ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="p-4 rounded-md bg-green-50 text-green-800 mb-6">
                  Thank you for your message. We'll get back to you shortly!
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Consultation">Project Consultation</option>
                      <option value="Career Opportunities">Career Opportunities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-animated inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 rounded-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="relative h-full min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600599542!2d77.35073846401979!3d12.954517010883638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1661164711700!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
