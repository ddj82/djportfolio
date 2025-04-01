import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App bg-gray-900">
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        className="flex items-center justify-center h-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" role="status"></div>
                    </motion.div>
                ) : (
                    <>
                        <Navbar />
                        <motion.main
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Hero />
                            <About />
                            <Projects />
                            <Contact />
                        </motion.main>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
