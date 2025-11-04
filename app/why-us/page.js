"use client"

import Link from 'next/link'

export default function WhyUs() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast and Reliable Service',
      description: 'We know how important deadlines are, especially when you\'re selling, renting, or managing a property in Manchester. Our assessors deliver accurate EPC reports quickly often within 24 to 48 hours of inspection.',
      highlights: [
        '24-48 Hour Turnaround',
        'Quick Online Booking',
        'Fast Digital Delivery'
      ]
    },
    {
      icon: '💷',
      title: 'Affordable Pricing',
      description: 'We believe in fair and transparent pricing for Manchester property owners. With no hidden fees or surprise charges, you always know what you\'re paying for. Quality service shouldn\'t cost a fortune and with Prime EPC, it doesn\'t.',
      highlights: [
        'Transparent Pricing',
        'No Hidden Fees',
        'Competitive Manchester Rates'
      ]
    },
    {
      icon: '🏠',
      title: 'Certified Energy Assessors',
      description: 'All our Manchester-based assessors are fully qualified and accredited, following strict government guidelines to ensure every certificate is 100% compliant and reliable.',
      highlights: [
        'Fully Accredited',
        'Government Approved',
        'Quality Assured'
      ]
    },
    {
      icon: '📍',
      title: 'Manchester Coverage',
      description: 'We proudly serve customers across Greater Manchester and surrounding areas. Our local network ensures fast EPC services wherever you are in the Manchester region.',
      highlights: [
        'Greater Manchester Service',
        'Local Manchester Assessors',
        'Flexible Scheduling'
      ]
    },
    {
      icon: '🤝',
      title: 'Customer-Focused Approach',
      description: 'We\'re not just here to issue certificates we\'re here to help Manchester property owners. Our friendly team is always available to answer your questions and guide you through the EPC process from start to finish.',
      highlights: [
        'Personal Manchester Support',
        'Expert Guidance',
        'Friendly Local Service'
      ]
    },
    {
      icon: '💡',
      title: 'Trusted by Homeowners and Landlords',
      description: 'Over the years, we\'ve earned the trust of homeowners, estate agents, and landlords across Manchester. Our goal is simple to provide EPCs that are fast, fair, and fully dependable.',
      highlights: [
        'Proven Manchester Track Record',
        'Local Client Testimonials',
        'Manchester Industry Experience'
      ]
    }
  ]

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Background Image with Overlay - Changed to Manchester skyline */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/whyusbg.jpg")'
          }}
        />
        {/* Green & Gold Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-yellow-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-200 text-sm font-semibold tracking-wide bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  MANCHESTER'S TRUSTED EPC PROVIDER
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Why Property Owners
                <span className="block bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                   Choose Us
                </span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Experience the difference with our professional, reliable, and customer-focused EPC services across Manchester. 
                We're committed to making your certification process smooth, fast, and stress-free.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge badge-golden mb-4">
              ⭐ WHY WE'RE DIFFERENT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Property Owners Trust Prime EPC</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with exceptional customer service to deliver the best EPC experience in Manchester
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-hover bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200 group hover:border-yellow-300 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="badge badge-primary mb-4">
                📊 OUR IMPACT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by Property Professionals</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Numbers that speak to our commitment to quality and customer satisfaction in Manchester
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { number: '24-48h', label: 'Average Turnaround' },
                { number: '100%', label: 'Customer Satisfaction' },
                { number: '100%', label: 'Compliance Rate' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                    <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


     {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your EPC Certificate?</h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied property owners across Manchester who trust Prime EPC for their energy certification needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="btn-secondary text-lg px-10 py-5 flex items-center gap-3 group"
            >
              <span>Contact Us Today</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="btn-primary text-lg px-10 py-5 flex items-center gap-3 group"
            >
              <span>Book Your EPC</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-200 font-semibold">Phone</p>
                  <p className="text-white font-bold text-lg">+44 7469 340373</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-200 font-semibold">Email</p>
                  <p className="text-white font-bold">primeepc.design@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}