import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Contact() {
  // Yup validation schema
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-700 font-medium mt-3">
            We’d love to hear from you — let’s start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-xl">
          {/* ✅ Form with validation */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <label className="block text-base font-bold text-gray-800">Full Name</label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.fullName && (
                <p className="text-red-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800">Email Address</label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800">Message</label>
              <textarea
                {...register("message")}
                rows="5"
                placeholder="Type your message here..."
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              {errors.message && (
                <p className="text-red-600 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Section (unchanged) */}
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
