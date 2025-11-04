"use client"

import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn how we use cookies to enhance your browsing experience and improve our services.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-600">
                    This Cookie Policy explains how <strong>Prime EPC and Design Consultants</strong> uses cookies and similar technologies on our website.
                    By using our website, you consent to the use of cookies as described in this policy.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit our website.
                        They help us provide you with a better experience by:
                      </p>
                      <ul className="space-y-2">
                        <li>Remembering your preferences and settings</li>
                        <li>Understanding how you use our website</li>
                        <li>Improving our services based on user behavior</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
                    <div className="text-gray-600">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Essential Cookies</h4>
                          <p>
                            These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Analytics Cookies</h4>
                          <p>
                            These help us understand how visitors interact with our website by collecting and reporting information anonymously.
                            This helps us improve our website structure and content.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Preference Cookies</h4>
                          <p>
                            These remember your preferences (such as language or region) to provide a more personalized experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">We use cookies for the following purposes:</p>
                      <ul className="space-y-2">
                        <li>Website Analytics - Understand how visitors use our site</li>
                        <li>Functionality - Remember your preferences and settings</li>
                        <li>Security - Protect against fraudulent activities</li>
                        <li>Performance - Optimize website speed and performance</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                    <div className="text-gray-600">
                      <p>
                        Some cookies on our website are placed by third-party services that appear on our pages.
                        These may include analytics providers or embedded content from other websites.
                      </p>
                      <p className="mt-4">
                        We do not control these third-party cookies and recommend you review their respective privacy policies for more information.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
                    <div className="text-gray-600">
                      <p className="mb-4">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-bold text-gray-900 mb-2">Browser Settings:</h5>
                        <ul className="space-y-2">
                          <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                          <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies</li>
                          <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                          <li><strong>Microsoft Edge:</strong> Settings → Privacy & Security → Cookies</li>
                        </ul>
                      </div>
                      
                      <p>
                        If you disable cookies, some features of our website may not function properly.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Policy</h2>
                    <div className="text-gray-600">
                      <p>
                        We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services.
                        Any changes will be posted on this page with an updated effective date.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookie Consent Notice */}
                <div className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="font-bold text-gray-900 mb-2">Your Consent</h3>
                  <p className="text-gray-600">
                    By continuing to use our website, you consent to our use of cookies as described in this policy.
                    You can withdraw your consent at any time by adjusting your browser settings as described above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}