import { useState } from "react";
import Header from "../components/Header";
import imageContact from "../assets/c1.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submit
    };

    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg -mt-7 font-serif">
    <h2 className="text-4xl font-bold mb-6 mt-10 text-center text-cyan-600">Contact Us</h2>

    <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
        {/* Image Section */}
        <img className="w-full md:w-96 h-96 rounded-lg object-cover" src={imageContact} alt="Contact" />

        {/* Text Section */}
        <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-semibold text-cyan-700 mb-4">We're here to help!</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
                We'd love to hear from you. Send us a message, and we'll do our best to get back to you.
            </p>
        </div>
    </div>

            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 shadow-lg border-2 border-cyan-600 p-10 rounded-lg">
                <div>
                    <label className="block font-semibold">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-300 outline-none" 
                        required 
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-300 outline-none" 
                        required 
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-300 outline-none" 
                        rows="4" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition-all"
                >
                    Send Message
                </button>
            </form>

          {/* Google Map */}
        <div className="mt-6">
            <h2 className="font-bold text-center text-cyan-600 text-4xl">Our Location</h2>
            <div className="w-full h-64 mt-4">
                <iframe
                    className="w-full h-full rounded-lg border-0"
                    src="https://www.google.com/maps?q=Mogadishu,Somalia&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

        </div>
        <br /> 
        </div>
    );
};

export default Contact;
