"use client"

import Link from 'next/link'

export default function TermsConditions() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Please read our terms and conditions carefully before using our services or making any bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-600">
                    Welcome to <strong>Prime EPC and Design Consultants</strong>.
                    By accessing or using our website and services, you agree to the following Terms and Conditions.
                    Please read them carefully before making any bookings or using our services.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information</h2>
                    <div className="text-gray-600">
                      <p>
                        These Terms and Conditions apply to all EPC services provided by <strong>Prime EPC and Design Consultants</strong> ("we", "us", "our") to our clients ("you", "your").
                        By booking our services, you accept these terms in full.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        We provide <strong>Energy Performance Certificates (EPCs)</strong> for domestic and commercial properties across the UK.
                        Our assessors are fully qualified and accredited to carry out EPC inspections following UK government regulations.
                      </p>
                      <p>
                        We reserve the right to update or modify our services at any time without prior notice.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bookings and Payments</h2>
                    <div className="text-gray-600">
                      <ul className="space-y-2">
                        <li>All bookings can be made through phone, email, or online form.</li>
                        <li>Once your booking is confirmed, payment details will be shared.</li>
                        <li>Payment must be made in full before or at the time of inspection, unless otherwise agreed.</li>
                        <li>We accept standard UK payment methods (bank transfer or other approved methods).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellations and Rescheduling</h2>
                    <div className="text-gray-600">
                      <ul className="space-y-2">
                        <li>You may cancel or reschedule your appointment up to <strong>24 hours before</strong> your scheduled inspection time.</li>
                        <li>If you cancel after this period, a <strong>cancellation fee</strong> may apply.</li>
                        <li>If our assessor arrives and cannot access the property due to client unavailability, a call-out charge may be applied.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Information</h2>
                    <div className="text-gray-600">
                      <p>
                        It is your responsibility to ensure all property details provided are accurate.
                        Any incorrect information may result in additional charges or delays in processing your EPC certificate.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Delivery of EPC Certificates</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        We aim to deliver all EPC certificates <strong>within 24-48 hours</strong> after inspection.
                        Delays may occur due to technical issues, assessor availability, or missing information.
                      </p>
                      <p>
                        Certificates are sent digitally to the email address provided during booking.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liability</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        While we take great care to ensure accuracy in our assessments, <strong>Prime EPC and Design Consultants</strong> shall not be held liable for:
                      </p>
                      <ul className="space-y-2">
                        <li>Losses resulting from misuse of the EPC certificate.</li>
                        <li>Errors arising from false or incomplete client information.</li>
                        <li>Any indirect or consequential damages.</li>
                      </ul>
                      <p className="mt-4">
                        Our total liability shall not exceed the amount paid for the EPC service.
                      </p>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        Your privacy is important to us. All data is handled according to our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>.
                      </p>
                      <p>
                        We never sell or share your information without consent.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                    <div className="text-gray-600">
                      <p>
                        These Terms and Conditions are governed by and interpreted according to <strong>UK law</strong>.
                        Any disputes arising will be handled exclusively in the courts of the United Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}