import { motion } from "framer-motion";
import Header from "../components/Header";
import  ClipLoader  from "react-spinners/ClipLoader";


//Women Clothes
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/2.jpg";
import img5 from "../assets/4.jpg";
import img6 from "../assets/5.jpg";
import img7 from "../assets/6.jpg";
import img8 from "../assets/7.jpg";
import img9 from "../assets/8.jpg";
import img10 from "../assets/9.jpg";
import img11 from "../assets/10.jpg";
import img12 from "../assets/11.jpg";
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
import { useState } from "react";
import Product from "../pages/Product";


function ProductList() 

{
    const [search, setSearch] = useState("")
    const [loader, setLoader] = useState(false)
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


    const handleForm =(event)=>{
        setSearch(event.target.value)
    }

    return (
        <div>

<div>
        <Header searchItem={handleForm} />
        {
            loader == true ? <ClipLoader className="mt-32" loading={loader} /> :


    <div className="pt-24 grid grid-cols-[300px_300px_300px] justify-center gap-10">

    {
        products.filter((data) => {
            return search.toLowerCase() === "" ? data 
            :
            data.title.toLowerCase().includes(search.toLowerCase())
        })
  
    }   
    </div>
}

    </div>

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
    );
}

export default ProductList;
