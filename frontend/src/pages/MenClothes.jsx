import { motion } from "framer-motion";

// men clothes
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";
import img25 from "../assets/25.jpg";
import img26 from "../assets/26.jpg";
import img27 from "../assets/27.jpg";
import img28 from "../assets/28.jpg";
import img29 from "../assets/29.jpg";
import img30 from "../assets/30.jpg";
import img31 from "../assets/31.jpg";
import img32 from "../assets/32.jpg";
import img33 from "../assets/33.jpg";
import img34 from "../assets/34.jpg";
import img35 from "../assets/35.jpg";
import img36 from "../assets/36.jpg";
import img37 from "../assets/37.jpg";
import img38 from "../assets/38.jpg";
import img39 from "../assets/39.jpg";
import img40 from "../assets/40.jpg";
import img41 from "../assets/41.jpg";
import img42 from "../assets/42.jpg";
import img43 from "../assets/43.jpg";
import img44 from "../assets/44.jpg";
import img45 from "../assets/45.jpg";
import img46 from "../assets/46.jpg";
import img47 from "../assets/47.jpg";
import img48 from "../assets/48.jpg";
import img49 from "../assets/49.jpg";
import img50 from "../assets/50.jpg";
import img51 from "../assets/51.jpg";
import img52 from "../assets/52.jpg";
import img53 from "../assets/53.jpg";
import img54 from "../assets/54.jpg";
import img55 from "../assets/55.jpg";
import img56 from "../assets/56.jpg";
import img57 from "../assets/57.jpg";
import img58 from "../assets/58.jpg";
import img59 from "../assets/59.jpg";
import img60 from "../assets/60.jpg";
import img61 from "../assets/61.jpg";
import img62 from "../assets/62.jpg";
import img63 from "../assets/63.jpg";
import img64 from "../assets/64.jpg";
import img65 from "../assets/65.jpg";
import img66 from "../assets/66.jpg";
import img67 from "../assets/67.jpg";
import img68 from "../assets/68.jpg";
import img69 from "../assets/69.jpg";
import img70 from "../assets/70.jpg";
import Header from "../components/Header";


const MenClothes = () =>{
    const products = [
        // men images
        
                { id: 23, image: img23, name: "men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 24, image: img24, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 25, image: img25, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 26, image: img26, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 27, image: img27, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 28, image: img28, name: "Men Shoes", description: "High-performance sneakers", price: 49.99 },
                { id: 29, image: img29, name: "Men Clothes", description: "Elegant evening dress", price: 19.99 },
                { id: 30, image: img30, name: "men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 31, image: img31, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 32, image: img32, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 33, image: img33, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 34, image: img34, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 35, image: img35, name: "Men Shoes", description: "High-performance sneakers", price: 49.99 },
                { id: 36, image: img36, name: "Men Clothes", description: "Elegant evening dress", price: 19.99 },
                { id: 37, image: img37, name: "Men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 38, image: img38, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 39, image: img39, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 40, image: img40, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 41, image: img41, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 42, image: img42, name: "Men Shoes", description: "High-performance sneakers", price: 49.99 },
                { id: 43, image: img43, name: "Men Clothes", description: "Elegant evening dress", price: 19.99 },
                { id: 44, image: img44, name: "Men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 45, image: img45, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 46, image: img46, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 47, image: img47, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 48, image: img48, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 49, image: img49, name: "men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 50, image: img50, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 51, image: img51, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 52, image: img52, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 53, image: img53, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 54, image: img54, name: "Men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 55, image: img55, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 56, image: img56, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 57, image: img57, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 58, image: img58, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 59, image: img59, name: "Men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 60, image: img60, name: "men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 61, image: img61, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 62, image: img62, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 63, image: img63, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 64, image: img64, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 65, image: img65, name: "men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
                { id: 66, image: img66, name: "Men Jacket", description: "Slim-fit denim jacket", price: 29.99 },
                { id: 67, image: img67, name: "Men Shoes", description: "Comfortable running shoes", price: 49.99 },
                { id: 68, image: img68, name: "Men Clothes", description: "Floral print dress", price: 19.99 },
                { id: 69, image: img69, name: "Men Jacket", description: "Stylish graphic tee", price: 29.99 },
                { id: 70, image: img70, name: "Men Clothes", description: "Casual everyday t-shirt", price: 19.99 },
        
        
    ];
    return<>
    <div>
        <Header />
    
            {/* Men Clothes Section */}
            <motion.header 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-bold mt-10 mb-6 text-cyan-600"
            >
                Men Clothes
            </motion.header>
            <div className="flex flex-wrap justify-center gap-5">
                {products.filter(p => p.name.includes("Men")).map((product, index) => (
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
    </>
}

export default MenClothes;