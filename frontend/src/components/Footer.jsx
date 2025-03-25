import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 font-serif ">
            <div className="container mx-auto px-6 sm:pl-[80px] pl-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Company Info */}
                    <div>
                        <h2 className="text-lg font-bold mb-3">About Us</h2>
                        <h1 className="text-4xl text-cyan-500 mb-3 font-bold -ml-3">💎Kafia Collection</h1>
                        <p className="text-sm text-gray-400 mb-3">
                            Waxaan u heellannahay inaan siino macaamiisheena alaab iyo adeegyo tayo sare leh.
                        </p>
                        <p className="text-sm text-gray-400 mb-3">
                            Waxaan mar walba dadaal ugu jirnaa inaan kuu keenno adeegyo iyo alaabo tayo sare leh.
                        </p>
                        <p className="text-sm text-gray-400 mb-3">
                            Kalsoonidaada waa mudnaantayada koowaad.
                        </p>
                        <p className="text-sm text-gray-400">
                            Ku biir qoyska macaamiisheena oo hel faa'iidooyin gaar ah.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:ml-[80px] pl-0">
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-cyan-500">Home</a></li>
                            <li><a href="#" className="hover:text-cyan-500">About</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Products</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex justify-center md:justify-start items-center">
                                <FaMapMarkerAlt className="mr-2 text-cyan-500" /> Mogadishu, Somalia
                            </li>
                            <li className="flex justify-center md:justify-start items-center">
                                <FaPhone className="mr-2 text-cyan-500" /> +252 61 6745787
                            </li>
                            <li className="flex justify-center md:justify-start items-center">
                                <FaEnvelope className="mr-2 text-cyan-500" /> Kafiahussein@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="text-center mt-10">
                    <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/ShukriSheikhHussein" className="text-cyan-500 hover:text-cyan-400"><FaFacebook size={24} /></a>
                        <a href="#" className="text-cyan-500 hover:text-cyan-400"><FaTwitter size={24} /></a>
                        <a href="mailto:nadahussein686@gmail.com" className="text-cyan-500 hover:text-cyan-400"><FaEnvelope size={24} /></a>
                        <a href="https://www.instagram.com/shukri" className="text-cyan-500 hover:text-cyan-400"><FaInstagram size={24} /></a>
                        <a href="https://www.tiktok.com/@kafia_143" className="text-cyan-500 hover:text-cyan-400"><FaTiktok size={24} /></a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-gray-500 text-sm ">
                    &copy; {new Date().getFullYear()} Kafia Collection. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
