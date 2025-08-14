/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // 'class' 전략으로 다크 모드 활성화
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내 모든 컴포넌트 검색
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
