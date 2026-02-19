import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919567483538?text=Hello%20Nashif!%20I%20have%20an%20inquiry%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.99.54 1.761.846 2.806.846 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.767-5.768-5.767zm0-.818c3.633 0 6.585 2.954 6.585 6.585 0 3.634-2.951 6.587-6.585 6.587-1.129 0-2.176-.324-3.103-.84l-3.326.874.887-3.237c-.689-1.077-1.042-2.179-1.042-3.383 0-3.634 2.95-6.586 6.584-6.586h0zm3.367 7.781c-.139-.069-.824-.407-.951-.453-.127-.046-.22-.069-.313.069-.093.139-.359.453-.44.546-.081.093-.162.105-.301.035-.139-.069-.587-.216-1.118-.689-.413-.368-.692-.823-.774-.962-.081-.139-.009-.214.061-.283.062-.061.139-.162.208-.243.07-.081.093-.139.139-.232.046-.093.023-.174-.012-.243-.035-.069-.313-.753-.428-1.03-.112-.269-.225-.232-.313-.236l-.265-.005c-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .682.497 1.341.567 1.434.069.093.978 1.493 2.37 2.094.331.144.59.23.791.293.33.105.631.09.866.055.26-.039.824-.337.94-.662.116-.325.116-.603.081-.662-.035-.058-.128-.093-.267-.162z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with me</span>
        </a>
    );
};

export default WhatsAppButton;
