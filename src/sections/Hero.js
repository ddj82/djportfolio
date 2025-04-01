import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="main"
            className="relative py-36 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 overflow-hidden"
        >
            {/* 흐르는 원형 배경 효과 */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>

            <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-4xl font-extrabold text-white mb-5 leading-tight relative z-10"
            >
                풀스택 개발자<br />
                <span className="text-blue-400">김동준</span>입니다.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-400 text-sm md:text-base mb-6 relative z-10"
            >
                React부터 Spring Boot까지, <br className="block md:hidden" />
                사용자 중심의 웹을 만드는 데 진심인 사람입니다.
            </motion.p>

            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:shadow-xl hover:bg-blue-700 transition-all duration-300 relative z-10"
            >
                👋 연락하기
            </motion.a>
        </section>
    );
};

export default Hero;
