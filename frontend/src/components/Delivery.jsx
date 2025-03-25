import { FaTruck, FaClock, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const Delivery = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-4xl font-bold mb-10 text-center text-cyan-600">Adeegga Keenista</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Free & Fast Delivery */}
                <div className="flex flex-col items-center text-center p-6 bg-cyan-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <FaTruck className="text-cyan-600 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Keenis Degdeg ah</h3>
                    <p className="text-gray-700 mt-2">Dalabkaaga si dhaqso ah ayuu kuu soo gaarayaa.</p>
                </div>

                {/* Delivery Time */}
                <div className="flex flex-col items-center text-center p-6 bg-cyan-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <FaClock className="text-cyan-600 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Wakhti Gaaban</h3>
                    <p className="text-gray-700 mt-2">Waxaan dammaanad qaadaynaa keenis degdeg ah.</p>
                </div>

                {/* Affordable Pricing */}
                <div className="flex flex-col items-center text-center p-6 bg-cyan-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <FaDollarSign className="text-cyan-600 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Qiimo Jaban</h3>
                    <p className="text-gray-700 mt-2">Qiimayaashayadu waa mid ku raali galinaaya.</p>
                </div>

                {/* Secure & Trusted */}
                <div className="flex flex-col items-center text-center p-6 bg-cyan-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <FaShieldAlt className="text-cyan-600 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Kalsooni & Ammaan</h3>
                    <p className="text-gray-700 mt-2">Adeeggeenna waa mid la isku halayn karo oo badbaado leh.</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
