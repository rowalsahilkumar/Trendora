export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-700 font-medium mt-3">
            We’d love to hear from you — let’s start a conversation!
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-xl">
          {/* Contact Form */}
          <form className="space-y-8">
            <div>
              <label className="block text-base font-bold text-gray-800">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 text-gray-800">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">📍 Our Office</h2>
              <p className="text-lg font-medium">
                Tendora Street, E-Commerce Plaza<br />SAS Nagar, PB 160059
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-2">📧 Email</h2>
              <p className="text-lg font-medium">support@tendorastore.com</p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-2">📞 Phone</h2>
              <p className="text-lg font-medium">+91-12345-67890</p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-2">🕒 Business Hours</h2>
              <p className="text-lg font-medium">
                Mon–Fri: 9 AM – 6 PM<br />Sat–Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
