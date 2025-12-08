'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, MapPin, Phone, Mail, Truck, Leaf, CheckCircle, User, Calendar, MessageSquare } from 'lucide-react';

// --- Data & Constants ---
const PRODUCTS = [
    { id: 1, name: "Bell Pepper", price: 80.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1563565375-f3fdf5efa269?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Strawberry", price: 120.00, category: "Fruits", img: "https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Green Beans", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Purple Cabbage", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1515471209610-dae1c92d801b?auto=format&fit=crop&w=300&q=80" },
    { id: 5, name: "Tomato", price: 80.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: "Brocolli", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: "Carrots", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80" },
    { id: 8, name: "Fruit Juice", price: 120.00, category: "Juices", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80" },
    { id: 9, name: "Onion", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=300&q=80" },
    { id: 10, name: "Apple", price: 120.00, category: "Fruits", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80" },
    { id: 11, name: "Garlic", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80" },
    { id: 12, name: "Chilli", price: 120.00, category: "Vegetables", img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=300&q=80" }
];

const BLOG_POSTS = [
    { id: 1, title: "Even the all-powerful Pointing has no control about the blind texts", date: "July 20, 2019", author: "Admin", comments: 3, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { id: 2, title: "Healthy eating habits for a better lifestyle", date: "July 22, 2019", author: "Admin", comments: 5, img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80", content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." },
    { id: 3, title: "Why organic food is better for your health", date: "July 25, 2019", author: "Admin", comments: 8, img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=400&q=80", content: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
    { id: 4, title: "Cooking tips for fresh vegetables", date: "July 28, 2019", author: "Admin", comments: 2, img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=400&q=80", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia." },
    { id: 5, title: "Best seasonal fruits to eat this summer", date: "Aug 01, 2019", author: "Admin", comments: 4, img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=400&q=80", content: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas." },
    { id: 6, title: "Understanding the benefits of a plant-based diet", date: "Aug 05, 2019", author: "Admin", comments: 6, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80", content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life." },
];

// Utility class names for Vegefoods colors/styles
const VF_PRIMARY = 'text-[#82ae46]';
const BG_VF_PRIMARY = 'bg-[#82ae46]';
const BTN_VF_PRIMARY = `${BG_VF_PRIMARY} text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 shadow-md`;
const BTN_OUTLINE = `border border-[#82ae46] text-[#82ae46] py-3 px-6 rounded-full hover:bg-[#82ae46] hover:text-white transition duration-300`;

// --- Components ---

/** Renders a single product card used in Home and Shop pages */
const ProductCard = ({ product, onAddToCart, onShowDetails }) => (
    <div className="product-item bg-white border border-gray-100 p-0 rounded-md shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative overflow-hidden">
            <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x300/82ae46/ffffff?text=${product.name}`; }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-end justify-center pb-4">
               {/* Overlay content can go here if needed */}
            </div>
            {product.category && (
                <span className="absolute top-2 left-2 bg-vf-primary text-white text-xs px-2 py-1 rounded hidden">{product.category}</span>
            )}
        </div>
        <div className="p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 mt-1 uppercase tracking-wide">{product.name}</h3>
            <div className="flex justify-center items-center space-x-2 mt-2">
                <p className="text-gray-500 line-through text-sm">$120.00</p>
                <p className={`${VF_PRIMARY} font-bold`}>${product.price.toFixed(2)}</p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button onClick={() => onShowDetails(product.id)} className="bg-vf-primary text-white p-3 rounded-full hover:bg-green-700 transition shadow-md" title="View Details">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                </button>
                <button onClick={() => onAddToCart(product.id)} className="bg-vf-primary text-white p-3 rounded-full hover:bg-green-700 transition shadow-md" title="Add to Cart">
                    <ShoppingCart className="h-5 w-5" />
                </button>
            </div>
        </div>
    </div>
);

/** Single Page View: Home */
const HomePage = ({ onShowPage, onAddToCart }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const featuredProducts = PRODUCTS.slice(0, 8); // Showing 8 products like template

    return (
        <section id="home" className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[85vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center p-6 max-w-3xl">
                        <span className="text-xl md:text-2xl font-handwriting text-[#82ae46] block mb-4 font-bold tracking-wider uppercase drop-shadow-md">100% Fresh & Organic Foods</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">We serve Fresh Vegetables & Fruits</h1>
                        <button onClick={() => onShowPage('shop')} className={`${BTN_VF_PRIMARY} text-lg px-8 py-4`}>View Details</button>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    {['Free Shipping', 'Always Fresh', 'Superior Quality', 'Support'].map((title, index) => (
                        <div key={index} className="group">
                             <div className={`w-24 h-24 mx-auto rounded-full border-4 border-[#82ae46]/20 flex items-center justify-center mb-6 group-hover:bg-[#82ae46] group-hover:text-white transition-colors duration-300 text-[#82ae46]`}>
                                {index === 0 && <Truck className="h-10 w-10" />}
                                {index === 1 && <Leaf className="h-10 w-10" />}
                                {index === 2 && <CheckCircle className="h-10 w-10" />}
                                {index === 3 && <Phone className="h-10 w-10" />}
                             </div>
                             <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
                             <p className="text-gray-500 text-sm">Separated they live in. A small river named Duden flows</p>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Categories Images */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                 <div className="relative h-64 bg-cover bg-center group" style={{backgroundImage: "url('https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80')"}}>
                     <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-300 flex flex-col justify-end p-6">
                         <h3 className="text-white text-2xl font-bold mb-2"><a href="#" onClick={(e) => {e.preventDefault(); onShowPage('shop');}} className="bg-[#82ae46] px-4 py-2 rounded-md hover:bg-green-700">Fruits</a></h3>
                     </div>
                 </div>
                 <div className="relative h-64 bg-cover bg-center group" style={{backgroundImage: "url('https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80')"}}>
                     <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-300 flex flex-col justify-end p-6">
                         <h3 className="text-white text-2xl font-bold mb-2"><a href="#" onClick={(e) => {e.preventDefault(); onShowPage('shop');}} className="bg-[#82ae46] px-4 py-2 rounded-md hover:bg-green-700">Vegetables</a></h3>
                     </div>
                 </div>
                 <div className="relative h-64 bg-cover bg-center group" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80')"}}>
                     <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-300 flex flex-col justify-end p-6">
                         <h3 className="text-white text-2xl font-bold mb-2"><a href="#" onClick={(e) => {e.preventDefault(); onShowPage('shop');}} className="bg-[#82ae46] px-4 py-2 rounded-md hover:bg-green-700">Juices</a></h3>
                     </div>
                 </div>
            </div>


            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <span className={`${VF_PRIMARY} font-handwriting italic text-xl`}>Featured Products</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">Our Products</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(p => (
                        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onShowDetails={(id) => onShowPage('product-single', id)} />
                    ))}
                </div>
            </div>

            {/* Deal of the day */}
            <div className="py-20 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595855709940-a924375b485d?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-white bg-opacity-70"></div>
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                     <div className="hidden md:block">
                         {/* Placeholder for Deal Image */}
                     </div>
                     <div className="bg-white p-10 rounded-lg md:text-left text-center shadow-lg">
                         <span className={`${VF_PRIMARY} text-lg font-bold mb-2 block`}>Best Price For You</span>
                         <h2 className="text-4xl font-bold text-gray-800 mb-4">Deal of the day</h2>
                         <p className="text-gray-600 mb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         <h3 className={`${VF_PRIMARY} text-2xl font-bold mb-6`}>Spinach</h3>
                         
                         <div className="flex space-x-4 mb-8 justify-center md:justify-start">
                             <div className="text-center">
                                 <div className={`${VF_PRIMARY} text-3xl font-bold`}>10</div>
                                 <span className="text-gray-500 text-xs uppercase">Days</span>
                             </div>
                             <div className="text-center">
                                 <div className={`${VF_PRIMARY} text-3xl font-bold`}>05</div>
                                 <span className="text-gray-500 text-xs uppercase">Hours</span>
                             </div>
                             <div className="text-center">
                                 <div className={`${VF_PRIMARY} text-3xl font-bold`}>56</div>
                                 <span className="text-gray-500 text-xs uppercase">Mins</span>
                             </div>
                             <div className="text-center">
                                 <div className={`${VF_PRIMARY} text-3xl font-bold`}>20</div>
                                 <span className="text-gray-500 text-xs uppercase">Secs</span>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>

            {/* Testimonial Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className={`${VF_PRIMARY} font-handwriting italic text-xl`}>Testimony</span>
                    <h2 className="text-4xl font-bold mb-12">Our Satisfied Customer</h2>
                    
                    <div className="bg-white p-10 rounded-xl shadow-sm relative">
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Customer" className="rounded-full border-4 border-white shadow-lg w-20 h-20" />
                        </div>
                        <p className="text-gray-600 italic mb-6 mt-8 text-lg leading-relaxed">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                        <h4 className="font-bold text-gray-900 text-xl">Garreth Smith</h4>
                        <span className="text-gray-500 text-sm uppercase tracking-wide">System Analyst</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

/** Single Page View: Shop */
const ShopPage = ({ onShowPage, onAddToCart }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Vegetables', 'Fruits', 'Juices', 'Dried'];

    const filteredProducts = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

    return (
        <section id="shop" className="min-h-screen">
            {/* Header */}
            <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Products</p>
                     <h1 className="text-4xl font-bold">Products</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-center mb-10">
                    <ul className="flex flex-wrap justify-center gap-4">
                        {categories.map(cat => (
                            <li key={cat}>
                                <button 
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-full transition-colors duration-300 ${filter === cat ? 'bg-[#82ae46] text-white' : 'text-[#82ae46] hover:bg-[#82ae46] hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(p => (
                        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onShowDetails={(id) => onShowPage('product-single', id)} />
                    ))}
                </div>
                
                {/* Pagination Mock */}
                <div className="flex justify-center mt-16 space-x-2">
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">&lt;</button>
                    <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center">1</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">2</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">3</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">&gt;</button>
                </div>
            </div>
        </section>
    );
};

/** Single Page View: Product Detail */
const SingleProductPage = ({ productId, onShowPage, onAddToCart }) => {
    const product = PRODUCTS.find(p => p.id === productId);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('desc');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setQuantity(1); // Reset quantity on page load
    }, [productId]);

    if (!product) {
        return (
            <div className="p-10 text-center text-xl min-h-screen pt-32">
                Product Not Found. <button onClick={() => onShowPage('shop')} className={`${VF_PRIMARY} underline`}>Go to Shop</button>
            </div>
        );
    }

    const handleAddToCart = () => {
        onAddToCart(product.id, quantity);
    };

    return (
        <section id="product-single" className="min-h-screen">
             <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Product</p>
                     <h1 className="text-4xl font-bold">Product Details</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex justify-center items-center">
                        <img 
                            src={product.img} 
                            alt={product.name} 
                            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg" 
                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/500x500/82ae46/ffffff?text=${product.name}`; }}
                        />
                    </div>

                    <div className="py-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <div className="flex items-center mb-6">
                             <div className="flex text-[#82ae46]">
                                 {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                             </div>
                             <span className="text-gray-500 ml-2">(5.0 Customer Review)</span>
                        </div>
                        <p className={`text-3xl ${VF_PRIMARY} font-bold mb-6`}>${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-[#82ae46]">-</button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center border-none outline-none text-gray-700 font-medium"
                                />
                                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-[#82ae46]">+</button>
                            </div>
                        </div>
                         <button onClick={handleAddToCart} className={`${BTN_VF_PRIMARY} px-8`}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

/** Single Page View: Blog */
const BlogPage = ({ onShowPage }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <section id="blog" className="min-h-screen">
             <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Blog</p>
                     <h1 className="text-4xl font-bold">Blog</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map(post => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                             <a href="#" className="block h-64 overflow-hidden relative group">
                                 <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                 <div className="absolute bottom-0 left-0 bg-[#82ae46] text-white px-4 py-1 flex items-center space-x-2">
                                     <span className="text-sm font-bold">{post.date.split(' ')[2]}</span>
                                     <span className="text-xs uppercase">{post.date.split(' ')[0]} {post.date.split(' ')[1].replace(',','')}</span>
                                 </div>
                             </a>
                             <div className="p-6">
                                 <h3 className="text-xl font-medium mb-3 hover:text-[#82ae46] transition"><a href="#">{post.title}</a></h3>
                                 <p className="text-gray-500 mb-4">{post.content}</p>
                                 <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-400">
                                     <div className="flex items-center space-x-1">
                                        <User className="w-4 h-4" /> <span>{post.author}</span>
                                     </div>
                                     <div className="flex items-center space-x-1">
                                        <MessageSquare className="w-4 h-4" /> <span>{post.comments}</span>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
                 {/* Pagination Mock */}
                 <div className="flex justify-center mt-16 space-x-2">
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">&lt;</button>
                    <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center">1</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">2</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">3</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white transition">&gt;</button>
                </div>
            </div>
        </section>
    );
};

/** Single Page View: About */
const AboutPage = ({ onShowPage }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const features = [
        { Icon: Truck, title: "Free Shipping", description: "For all orders over $100" },
        { Icon: Leaf, title: "Always Fresh", description: "Product is 100% fresh and organic" },
        { Icon: CheckCircle, title: "Superior Quality", description: "Quality products that meet all standards" },
        { Icon: Phone, title: "Support", description: "24/7 Support" }
    ];

    return (
        <section id="about" className="min-h-screen">
            <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / About</p>
                     <h1 className="text-4xl font-bold">About Us</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-96">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" alt="About Vegefoods" className="w-full h-full object-cover rounded-lg shadow-xl" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                                 <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#82ae46] border-b-8 border-b-transparent ml-1"></div>
                             </div>
                         </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Vegefoods an eCommerce website</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            But nothing the copy said could convince her and so it was at that moment she realized her existence was not valid in this virtual landscape.
                        </p>
                        <button onClick={() => onShowPage('shop')} className={`${BTN_VF_PRIMARY}`}>Shop now</button>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {features.map((f, index) => (
                            <div key={index} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                                <div className="w-20 h-20 mx-auto bg-[#e9ecef] rounded-full flex items-center justify-center mb-6 group hover:bg-[#82ae46] transition-colors">
                                    <f.Icon className={`h-10 w-10 text-[#82ae46] group-hover:text-white transition-colors`} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold uppercase mb-2">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
             <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                     <span className={`${VF_PRIMARY} font-handwriting italic text-xl`}>Testimony</span>
                     <h2 className="text-3xl font-bold">Our Satisfied Customer</h2>
                </div>
                 {/* Reusing Testimonial structure simplistically */}
                 <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-600 italic mb-6 text-lg">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
                    <h4 className="font-bold text-gray-900">Garreth Smith</h4>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">System Analyst</span>
                 </div>
            </div>
        </section>
    );
};

/** Single Page View: Contact */
const ContactPage = ({ onShowPage }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const contactInfo = [
        { Icon: MapPin, label: "Address", text: "198 West 21th Street, Suite 721 New York NY 10016" },
        { Icon: Phone, label: "Phone", text: "+1 235 2355 98" },
        { Icon: Mail, label: "Email", text: "info@yoursite.com" },
        { Icon: Leaf, label: "Website", text: "yoursite.com" }
    ];

    return (
        <section id="contact" className="min-h-screen">
             <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Contact</p>
                     <h1 className="text-4xl font-bold">Contact Us</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-sm text-center rounded-lg">
                             <p className="font-bold text-gray-900 mb-2">{item.label}:</p>
                             <p className="text-gray-600 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg overflow-hidden rounded-lg">
                    {/* Map Placeholder */}
                    <div className="bg-gray-200 h-96 lg:h-auto min-h-[400px] flex items-center justify-center">
                        <span className="text-gray-500 font-bold text-xl">Google Map Placeholder</span>
                    </div>

                    <div className="p-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                            <div className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-[#82ae46]" required />
                                <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-[#82ae46]" required />
                                <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-[#82ae46]" required />
                                <textarea rows="6" placeholder="Message" className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:border-[#82ae46]" required></textarea>
                                <button type="submit" className={`${BTN_VF_PRIMARY} px-10`}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

/** Single Page View: Cart */
const CartPage = ({ cart, onUpdateCartItem, onShowPage, onCheckout }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal > 0 ? 5.00 : 0;
    const discount = 3.00;
    const total = subtotal > 0 ? subtotal + delivery - discount : 0;

    return (
        <section id="cart" className="min-h-screen">
             <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Cart</p>
                     <h1 className="text-4xl font-bold">My Cart</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {cart.length === 0 ? (
                    <div className="text-center py-20">
                         <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                         <button onClick={() => onShowPage('shop')} className={`${BTN_VF_PRIMARY}`}>Start Shopping</button>
                    </div>
                ) : (
                    <>
                    <div className="overflow-x-auto mb-12">
                        <table className="min-w-full bg-white text-center">
                            <thead className="bg-[#82ae46] text-white">
                                <tr>
                                    <th className="px-6 py-4">&nbsp;</th>
                                    <th className="px-6 py-4">&nbsp;</th>
                                    <th className="px-6 py-4 font-bold uppercase">Product</th>
                                    <th className="px-6 py-4 font-bold uppercase">Price</th>
                                    <th className="px-6 py-4 font-bold uppercase">Quantity</th>
                                    <th className="px-6 py-4 font-bold uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="p-4">
                                            <button onClick={() => onUpdateCartItem(item.id, 0)} className="text-gray-400 hover:text-red-500">X</button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-20 h-20 mx-auto">
                                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-900 font-bold">{item.name}</div>
                                            <p className="text-gray-400 text-xs">Far far away, behind the word mountains</p>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">${item.price.toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <div className="inline-flex border border-gray-300 px-2 py-1">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min="1"
                                                    onChange={(e) => onUpdateCartItem(item.id, e.target.value)}
                                                    className="w-12 text-center outline-none"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900 font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col md:flex-row justify-end gap-8">
                         <div className="w-full md:w-1/3 p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase">Cart Total</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery</span>
                                    <span>${delivery.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Discount</span>
                                    <span>${discount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-900 font-bold text-lg pt-4 border-t">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button onClick={onCheckout} className={`w-full ${BTN_VF_PRIMARY} rounded-none`}>Proceed to Checkout</button>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </section>
    );
};

/** Single Page View: Checkout */
const CheckoutPage = ({ cart, onShowPage }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + 5.00 - 3.00;

    return (
        <section id="checkout" className="min-h-screen">
            <div className="bg-cover bg-center py-20 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="relative z-10 text-center text-white">
                     <p className="text-sm uppercase tracking-widest mb-2"><a href="#" onClick={() => onShowPage('home')} className="hover:text-[#82ae46]">Home</a> / Checkout</p>
                     <h1 className="text-4xl font-bold">Checkout</h1>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Billing Details */}
                     <div>
                         <h2 className="text-2xl font-bold mb-8 text-gray-900">Billing Details</h2>
                         <form className="space-y-6">
                             <div className="grid grid-cols-2 gap-6">
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">First Name</label>
                                     <input type="text" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Last Name</label>
                                     <input type="text" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                             </div>
                             <div>
                                  <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">State / Country</label>
                                  <select className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]">
                                      <option>France</option>
                                      <option>Italy</option>
                                      <option>Philippines</option>
                                      <option>South Korea</option>
                                      <option>Hongkong</option>
                                      <option>Japan</option>
                                  </select>
                             </div>
                             <div className="grid grid-cols-2 gap-6">
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Street Address</label>
                                     <input type="text" placeholder="House number and street name" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46] mb-3" />
                                     <input type="text" placeholder="Appartment, suite, unit etc: (optional)" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Town / City</label>
                                     <input type="text" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                             </div>
                             <div className="grid grid-cols-2 gap-6">
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Postcode / ZIP</label>
                                     <input type="text" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                                 <div>
                                     <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Phone</label>
                                     <input type="text" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                                 </div>
                             </div>
                             <div>
                                 <label className="block text-gray-900 font-bold mb-2 text-sm uppercase">Email Address</label>
                                 <input type="email" className="w-full p-3 border border-gray-300 outline-none focus:border-[#82ae46]" />
                             </div>
                         </form>
                     </div>

                     {/* Order Summary */}
                     <div className="bg-gray-50 p-8">
                         <h2 className="text-xl font-bold mb-8 text-gray-900 uppercase">Cart Total</h2>
                         <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-600 border-b pb-2">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 border-b pb-2">
                                <span>Delivery</span>
                                <span>$5.00</span>
                            </div>
                            <div className="flex justify-between text-gray-600 border-b pb-2">
                                <span>Discount</span>
                                <span>$3.00</span>
                            </div>
                            <div className="flex justify-between text-gray-900 font-bold text-xl pt-2">
                                <span>Total</span>
                                <span className="text-[#82ae46]">${total.toFixed(2)}</span>
                            </div>
                         </div>
                         
                         <div className="mb-6">
                             <div className="flex items-center mb-2">
                                 <input type="radio" name="payment" id="bank" className="mr-2" defaultChecked />
                                 <label htmlFor="bank" className="text-gray-900 font-medium">Direct Bank Transfer</label>
                             </div>
                             <p className="text-gray-500 text-sm ml-6 mb-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                             
                             <div className="flex items-center mb-2">
                                 <input type="radio" name="payment" id="check" className="mr-2" />
                                 <label htmlFor="check" className="text-gray-900 font-medium">Check Payment</label>
                             </div>
                             <div className="flex items-center mb-2">
                                 <input type="radio" name="payment" id="paypal" className="mr-2" />
                                 <label htmlFor="paypal" className="text-gray-900 font-medium">Paypal</label>
                             </div>
                         </div>

                         <div className="flex items-center mb-6">
                            <input type="checkbox" className="mr-2" required />
                            <span className="text-sm text-gray-600">I have read and accept the terms and conditions</span>
                         </div>
                         
                         <button onClick={() => {alert("Order Placed Successfully!"); onShowPage('home');}} className={`w-full ${BTN_VF_PRIMARY} rounded-none py-4 text-lg`}>Place an Order</button>
                     </div>
                </div>
            </div>
        </section>
    );
}

// --- Main Application Component ---
const veg = () => {
    // State for navigation: 'home', 'shop', 'product-single', 'about', 'contact', 'cart', 'blog', 'checkout'
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('vegefoodsCart');
        return localCart ? JSON.parse(localCart) : [];
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('vegefoodsCart', JSON.stringify(cart));
    }, [cart]);

    const showNotification = (message) => {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-[#82ae46] text-white p-3 rounded-lg shadow-xl transition-opacity duration-300 z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    };

    const handleShowPage = useCallback((pageId, id = null) => {
        setCurrentPage(pageId);
        setSelectedProductId(id);
        setIsMobileMenuOpen(false);
    }, []);

    const handleAddToCart = useCallback((productId, quantity = 1) => {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === productId);
            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex] = { ...newCart[existingItemIndex], quantity: newCart[existingItemIndex].quantity + quantity };
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });

        showNotification(`${quantity}x ${product.name} added to cart!`);
    }, []);

    const handleUpdateCartItem = useCallback((productId, newQuantityStr) => {
        const newQuantity = parseInt(newQuantityStr) || 0;
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.id === productId);
            if (itemIndex === -1) return prevCart;
            if (newQuantity <= 0) {
                return prevCart.filter(item => item.id !== productId);
            } else {
                const newCart = [...prevCart];
                newCart[itemIndex] = { ...newCart[itemIndex], quantity: newQuantity };
                return newCart;
            }
        });
    }, []);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const navLinks = [
        { id: 'home', label: 'HOME' },
        { id: 'shop', label: 'SHOP' },
        { id: 'about', label: 'ABOUT' },
        { id: 'blog', label: 'BLOG' },
        { id: 'contact', label: 'CONTACT' },
    ];

    const renderPage = () => {
        switch (currentPage) {
            case 'shop':
                return <ShopPage onShowPage={handleShowPage} onAddToCart={handleAddToCart} />;
            case 'product-single':
                const pId = selectedProductId || PRODUCTS[0].id;
                return <SingleProductPage productId={pId} onShowPage={handleShowPage} onAddToCart={handleAddToCart} />;
            case 'about':
                return <AboutPage onShowPage={handleShowPage} />;
            case 'contact':
                return <ContactPage onShowPage={handleShowPage} />;
            case 'blog':
                return <BlogPage onShowPage={handleShowPage} />;
            case 'cart':
                return <CartPage cart={cart} onUpdateCartItem={handleUpdateCartItem} onShowPage={handleShowPage} onCheckout={() => handleShowPage('checkout')} />;
            case 'checkout':
                return <CheckoutPage cart={cart} onShowPage={handleShowPage} />;
            case 'home':
            default:
                return <HomePage onShowPage={handleShowPage} onAddToCart={handleAddToCart} />;
        }
    };

    return (
        <div className="min-h-screen antialiased bg-white font-sans text-gray-600">
             {/* Note: In a real environment, add <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Amatic+SC:wght@400;700&display=swap');</style> to index.html for exact fonts */}
            <style>{`
                .font-handwriting { font-family: 'Amatic SC', cursive; }
                body { font-family: 'Poppins', sans-serif; }
            `}</style>

            {/* Top Bar */}
            <div className="bg-[#82ae46] text-white py-1 px-4 text-xs md:text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center"><Phone className="w-3 h-3 mr-1"/> + 1235 2355 98</span>
                        <span className="flex items-center"><Mail className="w-3 h-3 mr-1"/> yourmail@email.com</span>
                    </div>
                    <span className="uppercase tracking-wide">3-5 Business days delivery & Free Returns</span>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white sticky top-0 z-50 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <button onClick={() => handleShowPage('home')} className={`text-2xl font-bold uppercase tracking-wider text-[#82ae46]`}>Vegefoods</button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleShowPage(link.id)}
                                    className={`text-xs uppercase tracking-widest hover:text-[#82ae46] transition duration-150 ${currentPage === link.id ? 'text-[#82ae46]' : 'text-gray-900'}`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Cart Icon */}
                        <div className="flex items-center space-x-4">
                            <button onClick={() => handleShowPage('cart')} className={`relative text-gray-900 hover:text-[#82ae46] transition duration-150 flex items-center`}>
                                <ShoppingCart className="h-5 w-5" />
                                <span className="ml-1 uppercase text-xs">[{cartCount}]</span>
                            </button>
                            {/* Mobile Menu Button */}
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-500 hover:text-[#82ae46]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleShowPage(link.id)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left ${currentPage === link.id ? 'text-[#82ae46]' : 'text-gray-700'}`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <main>{renderPage()}</main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-16 pb-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Vegefoods</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                             <div className="flex space-x-4">
                                 {/* Social Icons Placeholder */}
                                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#82ae46] hover:text-white transition cursor-pointer">T</div>
                                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#82ae46] hover:text-white transition cursor-pointer">F</div>
                                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#82ae46] hover:text-white transition cursor-pointer">I</div>
                             </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Menu</h2>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><a href="#" onClick={(e) => {e.preventDefault(); handleShowPage('shop');}} className="hover:text-[#82ae46]">Shop</a></li>
                                <li><a href="#" onClick={(e) => {e.preventDefault(); handleShowPage('about');}} className="hover:text-[#82ae46]">About</a></li>
                                <li><a href="#" onClick={(e) => {e.preventDefault(); handleShowPage('blog');}} className="hover:text-[#82ae46]">Journal</a></li>
                                <li><a href="#" onClick={(e) => {e.preventDefault(); handleShowPage('contact');}} className="hover:text-[#82ae46]">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                             <h2 className="text-lg font-bold text-gray-900 mb-6">Help</h2>
                             <ul className="space-y-3 text-sm text-gray-500">
                                 <li><a href="#" className="hover:text-[#82ae46]">Shipping Information</a></li>
                                 <li><a href="#" className="hover:text-[#82ae46]">Returns & Exchange</a></li>
                                 <li><a href="#" className="hover:text-[#82ae46]">Terms & Conditions</a></li>
                                 <li><a href="#" className="hover:text-[#82ae46]">Privacy Policy</a></li>
                             </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Have a Questions?</h2>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li className="flex items-start">
                                    <MapPin className="w-5 h-5 mr-3 mt-1" />
                                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3" />
                                    <span>+2 392 3929 210</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3" />
                                    <span>info@yourdomain.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-100">
                        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default veg;