import { useState } from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../assets/r1.jpg";
import image2 from "../assets/r2.jpg";
import image3 from "../assets/r3.jpg";
import image4 from "../assets/r4.jpg";
import image5 from "../assets/r5.jpg"; // Khaladkii image4 waa la saxay

const Review = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: "Haitam", rating: 5, comment: "Aad baan uga helay adeega!", image: image1 },
        { id: 2, name: "Shukri", rating: 4, comment: "Alaab tayo sare leh, runtii waan ku faraxsanahay.", image: image2 },
        { id: 3, name: "Warda", rating: 5, comment: "Adeeg deg deg ah, waan ka helay!", image: image3 },
    ]);

    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "", image: image4 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.rating > 0 && newReview.comment) {
            setReviews([...reviews, { id: Date.now(), ...newReview }]);
            setNewReview({ name: "", rating: 0, comment: "", image: image5 });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-600">Dib u Eegis Macaamiisha</h2>
            
            {/* Reviews Section */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h3 className="font-semibold text-lg">{review.name}</h3>
                            <div className="flex text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-700 mt-2">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Review */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-cyan-600 mb-4">Ku dar Dib u Eegis</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Magacaaga"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-cyan-300"
                        required
                    />
                    <select
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-cyan-300"
                        required
                    >
                        <option value="0">Xulato Qiimeynta</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} Star{num > 1 && "s"}
                            </option>
                        ))}
                    </select>
                    <textarea
                        placeholder="Faalladaada..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-cyan-300"
                        rows="3"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition"
                    >
                        Gudbi Dib u Eegis
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Review;
