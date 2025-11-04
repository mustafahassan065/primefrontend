import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Prime EPC and Design Consultants
            </h3>
            <p className="text-gray-300 mb-4">
              Making energy certification accessible, affordable, and easy for everyone in the Manchester.
            </p>
            <div className="text-gray-300">
              <p>📞 +44 7469 340373</p>
              <p>📧 primeepc.design@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Policies & Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Policies</h4>
            <div className="flex flex-col space-y-2 mb-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2 text-green-400">Service Areas</h5>
              <p className="text-gray-300 text-sm">
                We proudly serve customers across the Manchester, offering both domestic and commercial EPCs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Prime EPC and Design Consultants. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}