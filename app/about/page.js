"use client"

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-35 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/aboutbg.jpg")'
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
                  ABOUT PRIME EPC
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
               
                <span className="block bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                 About Us
                </span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Your trusted partner for professional Energy Performance Certificates and design consultancy services across Manchester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="badge badge-primary mb-4">
                🏢 OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Making energy certification accessible, affordable, and easy for everyone in Manchester
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission & Vision */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To make energy certification accessible, affordable, and easy for everyone in Manchester. We aim to help property owners make smarter energy choices that benefit both their finances and the environment.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-green-100 leading-relaxed">
                    To build a greener and more energy-efficient future where every home and business in Manchester contributes to a sustainable Britain. Through honesty, innovation, and dedication, we strive to become Manchester's most trusted name in EPC services.
                  </p>
                </div>
              </div>

              {/* Company Description */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional EPC Services</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At <strong className="text-green-700">Prime EPC and Design Consultants</strong>, we make getting your <strong>Energy Performance Certificate (EPC)</strong> simple, fast, and stress-free. We are a team of certified energy assessors providing reliable EPC services to <strong>homeowners, landlords, estate agents, and property managers</strong> across Manchester.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With years of experience and a strong focus on customer satisfaction, we ensure every EPC inspection is carried out with accuracy, honesty, and professionalism. Whether you need a domestic or commercial EPC, our assessors deliver quick turnaround times and fully compliant certificates you can trust.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe every property owner deserves clear information and professional service at an affordable price. Your convenience is our priority, and we're committed to providing a smooth, professional, and transparent service from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge badge-golden mb-4">
              ⭐ WHY CHOOSE PRIME EPC
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional, reliable, and efficient EPC services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Fast & Hassle-Free EPC',
                  description: 'Quick and professional EPC assessments with minimal disruption to your schedule.'
                },
                {
                  icon: '💷',
                  title: 'Competitive Pricing',
                  description: 'Affordable rates with no hidden fees - quality service that doesn\'t cost a fortune.'
                },
                {
                  icon: '🏆',
                  title: 'Qualified Assessors',
                  description: 'Fully accredited and insured energy assessors following strict government guidelines.'
                },
                {
                  icon: '📍',
                  title: 'Manchester Coverage',
                  description: 'Proudly serving customers across Manchester for both domestic and commercial properties.'
                },
                {
                  icon: '🤝',
                  title: 'Friendly Support',
                  description: 'Dedicated customer support team always available to answer your questions.'
                },
                {
                  icon: '📄',
                  title: 'Quick Certificates',
                  description: 'Receive your EPC certificate within 24-48 hours after inspection.'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="card-hover bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200 group hover:border-yellow-300 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="badge badge-primary mb-4">
                💡 OUR VALUES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Prime EPC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Accuracy',
                  description: 'Precise assessments and reliable certificates you can trust.'
                },
                {
                  icon: '⚡',
                  title: 'Efficiency',
                  description: 'Quick service without compromising on quality or compliance.'
                },
                {
                  icon: '🤝',
                  title: 'Integrity',
                  description: 'Honest, transparent service with no hidden surprises.'
                },
                {
                  icon: '🌱',
                  title: 'Sustainability',
                  description: 'Helping create a greener, more energy-efficient Manchester.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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