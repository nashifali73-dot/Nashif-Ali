import React from 'react';

const About = () => {
    return (
        <>
            {/* Decorative Elements */}
            <div className="gradient-blur top-[-10%] right-[-5%]"></div>
            <div className="gradient-blur bottom-[10%] left-[-10%]"></div>

            <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32" id="about">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column: About Me */}
                    <div className="lg:col-span-7 space-y-12">
                        <header className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                                Digital Marketing Strategist
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
                                Who is <span className="text-primary">Nashif Ali?</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Based in the vibrant tech landscape of India, Nashif Ali is a performance-driven marketer specializing in hyper-growth strategies. With a focus on data and creativity, he bridges the gap between complex algorithms and human connection.
                            </p>
                        </header>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-xl soft-shadow border border-slate-100 group">
                                <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Projects Completed</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl soft-shadow border border-slate-100 group">
                                <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Industries Served</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl soft-shadow border border-slate-100 group">
                                <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Experience</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/25">
                                Download Portfolio
                            </button>
                            <button className="flex items-center gap-2 text-slate-900 font-bold group">
                                View Case Studies
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Anti-Gravity Tools Grid */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-12 lg:mb-20 text-center lg:text-left text-slate-900">
                                My <span className="text-primary italic">Favourite</span> Tools
                            </h2>

                            {/* Tool Grid Container */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
                                {/* Meta Ads */}
                                <div className="float-1 group">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI7X0zlNpIrcsAsyPGjccej6C6g4bWsANOYhUaSjYwxI_d5rxj17ExjWXznS4lIemZnYu4fj0j32rhuPzujbg-U5j7Yc2sO3U9Vwgal_6acVPpCnFNmSh3hcKG_Gpp5VHQCI5q1O3thRddI7acTBbK9mf5shQA8iRiAQWculXy0qMYAUzxL4qkA3RPAWR-SyeARH8gQUrh1DMBoaIf4-FR7vWAcmphNKCf7hnFzDvwOo71JwAzA_Rjsh2y_20muT6iSYppbNu1TwQ_"
                                            alt="Meta Ads Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400">Meta Ads</span>
                                    </div>
                                </div>

                                {/* Google Ads */}
                                <div className="float-2 group">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdHjS1Lu3NKQWju_qqSNr9IdUM6kTbEqPdEujJOhLOyzNEycdSTESt_jdY-D1S4RUvKIv_VaD42hmlwrmbciNP4tCFyyDaTjHH58Ww5w88akuoMNUlnSgeu8YH7kMIs7oDFMs2BzfNOZ4Uqte9TpI4UaGfPgfRQOmIWHEN6boLR6hXYz6tOEw7mAVy4N2u9TcbGULqybnnW3zWl6rc9M_eKgY8_EzBBdM11s09znjZlmonIv7cOKcRKqsevBAfIXZKiICPjXw0jQW"
                                            alt="Google Ads Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 text-center">Google Ads</span>
                                    </div>
                                </div>

                                {/* Photoshop */}
                                <div className="float-3 group">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB7GFDVrcki2nJKBp3TF_3qGVIyBhXw869EKl1loTxY6NY4KMlVtC7u_dw2YMuGcFjv7abROrA5lT_5btKAC43MZgrRCkVt0bbKfYg_izkzs-1YK9dZd5WJavRsqaI5mlUI97QpZKbBk7S0qE7VHHqN_wN4U5IIQlzzKkFp_Jpy_qPTG5EBPBf0L4O8ObYTIxUYg2z8PBEDJy2mrMMACdJc7QQVOl_xLCrRdxFUqOyTz7GCzbdmaFI1ggSuQCSp7RlMJVS5ZWe5jer"
                                            alt="Photoshop Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 text-center">Photoshop</span>
                                    </div>
                                </div>

                                {/* HubSpot */}
                                <div className="float-4 group md:col-start-1">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgeDkMwx3Tbq9-s5SBW1BAg3cpR77RIe-NGOOz5j6JRV4_-I0nmbvlwVddwe4hBl9hzCxPCtA_c3JWRTlvBHfQArBbdWcbeI2XJ4WeEi83MVIRqPqMmVCDR9FW4w3ybtdL11Fy1WbvJ_HHjS84vzZ8nDHhaQrG-JIXQNy47KnReLAuZCtLqB5-wO32ovCn8JgMLzW_3aOOg0SrmV6mhBrCtrsoRdZRKWDSqcUmQLuq45vFVyJHte1ml95G0hFAC2MAaGRhRonluheR"
                                            alt="HubSpot Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 text-center">HubSpot</span>
                                    </div>
                                </div>

                                {/* Premiere Pro */}
                                <div className="float-5 group">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc5iOQljIm5p3hpA254BdFNMdXWxe9i2hA4sFjeNQpTpOvcq2l8h4oaaaZgrFLsTqYZG6pJYJhXAzBiBJSyLwMDuXG6ZaSd_NODD8DWKgAfmBfRftkPueY32iQoTqddF0Mfbg23saJdMZ9Gd8Vka8LaeO4jeA5-iziaYwZKdHnFEnhqNsOxabvTv4cPUjOKU_uu3BO32MMNJaTVmJQDwpYj4CgIQf-HZLNISDg0rW68VYrw-1uuVblH2hRY1LqbocmpBK2G4iUeBYl"
                                            alt="Premiere Pro Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 text-center">Premiere</span>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="float-2 group">
                                    <div className="bg-white p-6 rounded-2xl soft-shadow border border-slate-100 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary/50">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMJHnJy8TA3hXT8sCesV4fh-K6VI-7cUUReBfyX34pumly8XSQ7Qn-ZhsyIlHVn9LAa_0JbVMBgvCyepsNsQZAvlH_ATte1-bbToTp-KXTOyBrhACaYQQ9F3CTPOjuMmnhZgxdiibdTG4_92aXK9-FXb7JkzX3KmmbBIFWfbm7ep_jYxN0DA5z-ozDlI6mRU6z7DlnnR25GPZXkZWX9x2hDJ-4fycGS9x0XGPzaG93IgEmgZbvGVc2qHGde8jBGSQY0bKt9YE5HCm"
                                            alt="LinkedIn Ads Logo"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 text-center">Ads Mgmt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract Decorative Circles */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
                            <div className="w-[500px] h-[500px] border border-primary/20 rounded-full flex items-center justify-center">
                                <div className="w-[350px] h-[350px] border border-primary/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Section: Industries */}
                <div className="mt-32 pt-20 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Diverse Industry Experience</h3>
                            <p className="text-slate-500">From Fintech to E-commerce, Nashif has scaled brands across multiple verticals in the Indian and international markets.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2 font-bold text-slate-400 group hover:text-primary transition-colors">
                                <span className="material-icons text-primary/50 group-hover:text-primary">payments</span> FINTECH
                            </div>
                            <div className="flex items-center gap-2 font-bold text-slate-400 group hover:text-primary transition-colors">
                                <span className="material-icons text-primary/50 group-hover:text-primary">shopping_bag</span> E-COMMERCE
                            </div>
                            <div className="flex items-center gap-2 font-bold text-slate-400 group hover:text-primary transition-colors">
                                <span className="material-icons text-primary/50 group-hover:text-primary">fitness_center</span> WELLNESS
                            </div>
                            <div className="flex items-center gap-2 font-bold text-slate-400 group hover:text-primary transition-colors">
                                <span className="material-icons text-primary/50 group-hover:text-primary">school</span> ED-TECH
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
