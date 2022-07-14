import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import NewOffer from '../components/NewOffer';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <NewOffer />
        </div>
    )
}

export default Home
