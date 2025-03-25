import { motion } from "framer-motion";
import Header from "../components/Header";

function About() {
    return (
        <div className="w-full">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center min-h-screen sm:mt-[-7px] p-6 space-y-6">
                <h1>About Us</h1>

                {/* Header Section */}
                <motion.div 
                    className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 text-center"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold text-cyan-600">Kafia Collection💎</h1>
                    <p className="text-gray-600 mt-2 text-lg">
                        Astaanta cusub ee online shopping, tayada & xarragada isku darsatay.
                    </p>
                </motion.div>

                {/* Info Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {[
                        { icon: "🛍️", title: "Online Shopping", desc: "Si sahlan uga dukaameyso alaab tayo sare leh oo casri ah." },
                        { icon: "📦", title: "Delivery Degdeg ah", desc: "Alaabtaada si dhakhso leh ayaad u heli doontaa, meelkasta oo aad joogto." },
                        { icon: "✨", title: "Tayada Sare", desc: "Waxaan kuu keenaynaa alaabo tayo sare leh oo la hubo." },
                        { icon: "🎖️", title: " Sumcadda Kafia Collection", desc: "Qurux & Tayo ugu imaaw Kafia Collection." }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white shadow-md rounded-xl p-5 text-center"
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-700">{item.icon} {item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section */}
                <motion.div 
                    className="w-full max-w-4xl bg-cyan-500 text-white rounded-2xl p-6 text-center"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-2xl font-semibold text-black">Kafia Collection🛍️</h2>
                    <h3 className="text-xl text-black">waa</h3>
                    <p className="text-gray-100 mt-2">Quruxda Doorashadaada💎</p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
