import { motion } from "framer-motion";

//children clothes 
import img71 from "../assets/71.jpg";
import img72 from "../assets/72.jpg";
import img73 from "../assets/73.jpg";
import img74 from "../assets/74.jpg";
import img75 from "../assets/75.jpg";
import img76 from "../assets/76.jpg";
import img77 from "../assets/77.jpg";
import img78 from "../assets/78.jpg";
import img79 from "../assets/79.jpg";
import img80 from "../assets/80.jpg";
import img81 from "../assets/81.jpg";
import img82 from "../assets/82.jpg";
import img83 from "../assets/83.jpg";
import img84 from "../assets/84.jpg";
import img85 from "../assets/85.jpg";
import img86 from "../assets/86.jpg";
import img87 from "../assets/87.jpg";
import img88 from "../assets/88.jpg";
import img89 from "../assets/89.jpg";
import img90 from "../assets/90.jpg";
import img91 from "../assets/91.jpg";
import img92 from "../assets/92.jpg";
import img93 from "../assets/93.jpg";
import img94 from "../assets/94.jpg";
import img95 from "../assets/95.jpg";
import img96 from "../assets/96.jpg";
import img97 from "../assets/97.jpg";
import img98 from "../assets/98.jpg";
import img99 from "../assets/99.jpg";
import img100 from "../assets/100.jpg";
import img101 from "../assets/101.jpg";
import img102 from "../assets/102.jpg";
import img103 from "../assets/103.jpg";
import img104 from "../assets/104.jpg";
import img105 from "../assets/105.jpg";
import img106 from "../assets/106.jpg";
import Header from "../components/Header";

const ChildClothes = () =>{
    const products = [
         // children clothes
         { id: 71, image: img71, name: "Child Clothes", description: "Casual everyday t-shirt", price: 19.99 },
         { id: 72, image: img72, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 73, image: img73, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 74, image: img74, name: "Child Clothes", description: "Slim-fit denim jacket", price: 29.99 },
         { id: 75, image: img75, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 76, image: img76, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 77, image: img77, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 78, image: img78, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 79, image: img79, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 80, image: img80, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 81, image: img81, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 82, image: img82, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 83, image: img83, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 84, image: img84, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 85, image: img85, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 86, image: img86, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 87, image: img87, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 88, image: img88, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 89, image: img89, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 90, image: img90, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 91, image: img91, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 92, image: img92, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 93, image: img93, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 94, image: img94, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 95, image: img95, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 96, image: img96, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 97, image: img97, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 98, image: img98, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 99, image: img99, name: "Child Clothes", description: "Elegant evening dress", price: 19.99 },
         { id: 100, image: img100, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 101, image: img101, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 102, image: img102, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 103, image: img103, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 104, image: img104, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 105, image: img105, name: "Child Clothes", description: "Floral print dress", price: 29.99 },
         { id: 106, image: img106, name: "Child Clothes", description: "Floral print dress", price: 29.99 } 
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
                Children Clothes
            </motion.header>
            <div className="flex flex-wrap justify-center gap-5">
                {products.filter(p => p.name.includes("Child")).map((product, index) => (
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

export default ChildClothes;