import { motion } from "framer-motion";

// Import all images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";  
import Header from "../components/Header";

// List of products
const products = [
    { id: 1, image: img1, name: "Women Clothes", description: "Elegant Summer Dress", price: 19.99 },
    { id: 2, image: img2, name: "Women Jacket", description: "Warm and stylish winter jacket", price: 29.99 },
    { id: 3, image: img3, name: "Sport Shoes", description: "Comfortable running shoes", price: 49.99 },
    { id: 4, image: img4, name: "Women Clothes", description: "Casual summer top", price: 19.99 },
    { id: 5, image: img5, name: "Women Jacket", description: "Classic leather jacket", price: 29.99 },
    { id: 6, image: img6, name: "Sport Shoes", description: "High-performance sneakers", price: 49.99 },
    { id: 7, image: img7, name: "Women Clothes", description: "Elegant evening dress", price: 19.99 },
    { id: 8, image: img8, name: "Women Jacket", description: "Casual denim jacket", price: 29.99 },
    { id: 9, image: img9, name: "Sport Shoes", description: "Lightweight walking shoes", price: 49.99 },
    { id: 10, image: img10, name: "Women Clothes", description: "Floral print summer dress", price: 19.99 },
    { id: 11, image: img11, name: "Women Jacket", description: "Windproof hiking jacket", price: 29.99 },
    { id: 12, image: img12, name: "Sport Shoes", description: "Stylish sports sneakers", price: 49.99 },
    { id: 13, image: img13, name: "Women Clothes", description: "Chic office blazer", price: 19.99 },
    { id: 14, image: img14, name: "Women Jacket", description: "Woolen formal coat", price: 29.99 },
    { id: 15, image: img15, name: "Sport Shoes", description: "Breathable running shoes", price: 49.99 },
    { id: 16, image: img16, name: "Women Clothes", description: "Trendy crop top", price: 19.99 },
    { id: 17, image: img17, name: "Women Jacket", description: "Stylish bomber jacket", price: 29.99 },
    { id: 18, image: img18, name: "Sport Shoes", description: "Premium leather sneakers", price: 49.99 },
    { id: 19, image: img19, name: "Women Clothes", description: "Casual cotton blouse", price: 19.99 },
    { id: 20, image: img20, name: "Women Jacket", description: "Slim-fit business blazer", price: 29.99 },
    { id: 21, image: img21, name: "Sport Shoes", description: "All-terrain hiking shoes", price: 49.99 },
    { id: 22, image: img22, name: "Women Clothes", description: "Casual everyday t-shirt", price: 19.99 },
];

function WomenClothes() {

    return (
        <div>
            <Header />
        <div>

            {/* Women Clothes Section */}
            <motion.header 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-bold mb-6 text-cyan-600"
            >
                Women Clothes
            </motion.header>

            <div className="flex flex-wrap justify-center gap-5">
                {products.filter(p => p.name.includes("Women")).map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="shadow-lg p-4 rounded-lg bg-white text-center w-60"
                    >
                        <motion.img 
                            src={product.image} 
                            alt={product.name}
                            className="w-40 h-40 object-cover rounded-lg mx-auto"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        <div className="text-center mt-3">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="mt-3 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700"
                        >
                            Add to Cart
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default WomenClothes;
