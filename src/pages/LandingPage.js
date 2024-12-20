import React, { useState, useEffect, useRef } from 'react';
import './LandingPage.css'; 
import About from './About';
import Footer from '../components/Footer'; 

const menuItems = {
    Starters: [
        {
            id: 1,
            name: 'Chicken Kabab',
            image: 'https://th.bing.com/th/id/OIP.nRbC6qksXuz3vTUAIVP58gHaE5?w=186&h=123&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Juicy, flavorful chicken kebabs, perfectly grilled and ready to devour!',
            price: 10.00,
        },
        {
            id: 2,
            name: 'Dry Gobi',
            image: 'https://th.bing.com/th/id/OIP.vDScn-xrR6o0Tn5SUBRBxwHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 3,
            name: 'Chicken Chilly',
            image: 'https://th.bing.com/th/id/OIP.3ZvWx0y6PENPJSGMMZEEggHaEK?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 4,
            name: 'Baby Corn Fritters',
            image: 'https://th.bing.com/th/id/OIP.7z-g3jXOpUTXhzS455Js3AHaEo?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 5,
            name: 'Masala Papad',
            image: 'https://th.bing.com/th/id/OIP.oXepZZAU_y3yiQJgREAn2gHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 6,
            name: 'Soya Vada',
            image: 'https://th.bing.com/th/id/OIP.GMpMDRy7eKiVaegLkG1UGAHaFf?w=245&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
    ],
    MainCourse: [
        {
            id: 7,
            name: 'Grilled Pizza',
            image: 'https://th.bing.com/th/id/OIP.QTG8UmX9EdmQhbz-hyRqqAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Juicy grilled chicken served with seasonal vegetables.',
            price: 20.00,
        },
        {
            id: 8,
            name: 'Mexican Grilled Chicken ',
            image: 'https://th.bing.com/th/id/OIP.3Gktewu0PtoBUw2oPgaMlAHaLG?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Pasta with fresh vegetables in a light sauce.',
            price: 15.00,
        },
        {
            id: 9,
            name: 'Chees Nan',
            image: 'https://th.bing.com/th/id/OIP.0oUPyXtPqY9BlFmYkLIw9wHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3 &pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 10,
            name: 'Chicken Biriyani',
            image: 'https://th.bing.com/th/id/OIP.FPuP3QNkURKQqGMi9VkeZQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 11,
            name: 'Prawns Biriyani',
            image: 'https://th.bing.com/th/id/OIP.B332r5MAVpVtYkusfM4XngHaFU?w=274&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 12,
            name: 'Paneer masala',
            image: 'https://th.bing.com/th/id/OIP.ATKocAlWsBlCwBpne6mnCwHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
    ],
    Desserts: [
        {
            id: 13,
            name: 'Cup Cake',
            image: 'https://th.bing.com/th/id/OIP.XcEqLDK04zFN8pg7axlXygHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Rich and moist chocolate cake topped with creamy chocolate frosting.',
            price: 25.00,
        },
        {
            id: 14,
            name: 'Tiramisu CAke',
            image: 'https://th.bing.com/th/id/OIP.e5FCrXiYeuxnIAEKNVy4GgHaKf?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 15,
            name: 'Black Forest Eclair',
            image: 'https://th.bing.com/th/id/OIP.0f1qF4jSPzLHHd1vT8u4BgHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 16,
            name: 'Carrot Cake',
            image: 'https://th.bing.com/th/id/OIP.ua9L_GQl1A5wlWH8ecgy9QHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
        {
            id: 17,
            name: 'Honey Cake',
            image: 'https://th.bing.com/th/id/OIP.K8xsr_H-UEh1HZthIt8j3AHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Classic vanilla ice cream served with chocolate sauce.',
            price: 5.00,
        },
        {
            id: 18,
            name: 'Chocolate Macarons',
            image: 'https://th.bing.com/th/id/OIP.QHQRHzlxOCRAEJMhPuUf_QHaE8?w=208&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            description: 'Grilled bread topped with tomatoes, garlic, and basil.',
            price: 8.00,
        },
    ],
};

const LandingPage = ({ onAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAbout, setShowAbout] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const startersRef = useRef(null);
    const mainCourseRef = useRef(null);
    const dessertsRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const bottomPosition = document.documentElement.offsetHeight;

        if (scrollPosition >= bottomPosition) {
            setShowAbout(true);
            setShowFooter(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterItems = (items) => {
        return items.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="landing-page">
            <h1 className="title">Welcome to Foodie Heaven!</h1>

            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search for cakes..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
            </div>

            <div className="section-buttons">
                <button onClick={() => scrollToSection(startersRef)}>Starters</button>
                <button onClick={() => scrollToSection(mainCourseRef)}>Main Course</button>
                <button onClick={() => scrollToSection(dessertsRef)}>Desserts</button>
            </div>

            <div className="section" ref={startersRef}>
                <h2>Starters</h2>
                <div className="cake-list">
                    {filterItems(menuItems.Starters).map(item => (
                        <div key={item.id} className="cake-item">
                            <div className="cake-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section" ref={mainCourseRef}>
                <h2>Main Course</h2>
                <div className="cake-list">
                    {filterItems(menuItems.MainCourse).map(item => (
                        <div key={item.id} className="cake-item">
                            <div className="cake-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section" ref={dessertsRef}>
                <h2>Desserts</h2>
                <div className="cake-list">
                    {filterItems(menuItems.Desserts).map(item => (
                        <div key={item.id} className="cake-item">
                            <div className="cake-image">
                                <img src={item.image} alt={ item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            {showAbout && <About />}
            {showFooter && <Footer className="footer" />}
        </div>
    );
};

export default LandingPage;