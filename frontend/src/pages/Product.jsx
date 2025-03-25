import Header from "../components/Header";

function Product(props) {
    
    return (
        <div>
        <Header />

        <div className="border-2 border-cyan-600 p-2 font-serif rounded-lg shadow-lg">
            <img className="w-full h-52 object-cover rounded-md" src={props.product.image} alt="Women Clothes" />
            <div className="flex justify-between items-center mt-2">
                <h1 className="font-thin text-sm">{props.product.name}</h1>
                <p className="text-gray-500 text-sm">{props.product.description}</p> {/* Magaca dharka */}
                <h1 className="font-bold text-lg">${props.product.price}</h1>
            </div>
            <button className="w-full text-white bg-cyan-600 py-2 mt-3 rounded-md hover:bg-cyan-700 transition">
                Add to Cart
            </button>
        </div>
        </div>
    );
}

export default Product;
