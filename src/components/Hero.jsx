import React from 'react';

const Hero = () => {
    return (
        <>
            <main className="relative pt-32 pb-20 overflow-hidden hero-gradient">
                {/* Floating Decorative Blobs */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            HELLO THERE 👋
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900">
                            I'm Nashif Ali, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Marketer</span> <br />
                            based in INDIA.
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Helping brands grow through data-driven strategies and creative storytelling. With 1+ years of hands-on experience in scaling digital presence.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95">
                                Hire me
                            </button>
                            <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all active:scale-95">
                                View my portfolio
                            </button>
                        </div>

                        <div className="flex items-center gap-2 pt-4 group cursor-pointer w-fit">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-icons text-[20px]">download</span>
                            </div>
                            <span className="font-bold text-slate-700">Download CV</span>
                        </div>
                    </div>

                    {/* Right Column: Visual Portrait & Floating Icons */}
                    <div className="relative flex justify-center items-center">
                        {/* Portrait Wrapper */}
                        <div className="relative z-10 w-full max-w-md aspect-square bg-slate-200 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPCVNSE_92mKrALSLN6qkyh0mTA72djvCMpCv43h_3CEXONdO0xaPfmuI_OY2suvm002_1lfKsazgRO34MQ7yJl55QwfH96swUEEi7bFhsxYJxT-HVAwdFqZMwgBqkcnn10r41N03iuUqe6RCoIq88LGbhSjnW7GVRs5gAp2BD5Phql3OjL2FHA0knlOA3swnymtuZhdx6j4GM1UQxskyH9rzsekQslAPmJOp2eIBnQfjIfcWbMEKIU7RyVIYWqao78URMScC0tjQA"
                                alt="Nashif Ali Portrait"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Floating Anti-Gravity Cards */}
                        {/* Card 1: Digital Marketing */}
                        <div className="absolute -top-6 left-0 z-20 animate-float">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                    <span className="material-icons">trending_up</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expertise</p>
                                    <p className="font-extrabold text-slate-800">Digital Marketing</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Content Creation */}
                        <div className="absolute top-1/3 -right-12 z-20 animate-float-delayed">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500">
                                    <span className="material-icons">draw</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Strategy</p>
                                    <p className="font-extrabold text-slate-800">Content Creation</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Video Editing */}
                        <div className="absolute bottom-10 -left-8 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500">
                                    <span className="material-icons">videocam</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visuals</p>
                                    <p className="font-extrabold text-slate-800">Video Editing</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </main>

            {/* Services Ticker Bar */}
            <section className="bg-primary py-10 overflow-hidden">
                <div className="flex whitespace-nowrap animate-ticker">
                    <div className="flex items-center gap-12 px-6">
                        {['Digital Marketing', 'SEO Optimization', 'Content Strategy', 'Video Production', 'PPC Management', 'Social Media Growth'].map((item, index) => (
                            <span key={index} className="text-2xl font-black text-white/90 flex items-center gap-4 uppercase italic">
                                <span className="material-icons text-white/50">stars</span> {item}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate for infinite scroll */}
                    <div className="flex items-center gap-12 px-6">
                        {['Digital Marketing', 'SEO Optimization', 'Content Strategy', 'Video Production', 'PPC Management', 'Social Media Growth'].map((item, index) => (
                            <span key={`dup-${index}`} className="text-2xl font-black text-white/90 flex items-center gap-4 uppercase italic">
                                <span className="material-icons text-white/50">stars</span> {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
