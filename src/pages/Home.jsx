import React, { useState } from 'react';
import Navbar from '../components/Navbar';
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
        </div>
    )
}

export default Home
